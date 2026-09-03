import { behaviors, type Behavior } from './behaviors';
import { sections } from './questionnaire';

export interface BehaviorScore {
  behavior: Behavior;
  average: number;
  max: number;
  answeredCount: number;
  totalCount: number;
  flagged: boolean;
  level: 'normal' | 'mild' | 'moderate' | 'severe';
}

export interface QuestionnaireResult {
  behaviorScores: BehaviorScore[];
  overallRisk: number;
  topConcerns: BehaviorScore[];
  completedCount: number;
  totalCount: number;
}

function calculateItemScore(
  rawScore: number,
  questionId: number,
  behavior: Behavior
): number {
  if (rawScore === 0) return 0;
  const isReverse = behavior.reverseIds?.includes(questionId) ?? false;
  if (isReverse) {
    return 6 - rawScore;
  }
  return rawScore;
}

export function calculateScores(answers: Record<number, number>): QuestionnaireResult {
  const behaviorScores: BehaviorScore[] = [];
  let totalAnswered = 0;
  const allQuestionIds = sections.flatMap(s => s.questions.map(q => q.id));

  for (const behavior of behaviors) {
    let sum = 0;
    let answeredCount = 0;
    let maxScore = 0;

    for (const qid of behavior.questionnaireIds) {
      const raw = answers[qid];
      if (raw !== undefined && raw !== 0) {
        const score = calculateItemScore(raw, qid, behavior);
        sum += score;
        answeredCount++;
        if (score > maxScore) maxScore = score;
      }
    }

    const average = answeredCount > 0 ? sum / answeredCount : 0;
    const flagged = average >= behavior.threshold;

    let level: BehaviorScore['level'] = 'normal';
    if (average >= behavior.threshold + 1.5) level = 'severe';
    else if (average >= behavior.threshold + 0.8) level = 'moderate';
    else if (flagged) level = 'mild';

    behaviorScores.push({
      behavior,
      average: Number(average.toFixed(2)),
      max: maxScore,
      answeredCount,
      totalCount: behavior.questionnaireIds.length,
      flagged,
      level,
    });
  }

  const flaggedCount = behaviorScores.filter(b => b.flagged).length;
  const severitySum = behaviorScores.reduce((acc, b) => {
    if (b.level === 'severe') return acc + 3;
    if (b.level === 'moderate') return acc + 2;
    if (b.level === 'mild') return acc + 1;
    return acc;
  }, 0);
  const overallRisk = Math.min(100, Math.round((flaggedCount / behaviors.length) * 40 + (severitySum / (behaviors.length * 3)) * 60));

  const sorted = [...behaviorScores].sort((a, b) => {
    if (a.flagged !== b.flagged) return a.flagged ? -1 : 1;
    return b.average - a.average;
  });

  const topConcerns = sorted.filter(b => b.flagged).slice(0, 5);

  for (const qid of allQuestionIds) {
    if (answers[qid] !== undefined) totalAnswered++;
  }

  return {
    behaviorScores: sorted,
    overallRisk,
    topConcerns,
    completedCount: totalAnswered,
    totalCount: allQuestionIds.length,
  };
}

export function getUnansweredInSection(
  answers: Record<number, number>,
  sectionIndex: number
): number[] {
  const section = sections[sectionIndex];
  if (!section) return [];
  return section.questions
    .map(q => q.id)
    .filter(id => answers[id] === undefined);
}

export function getAllUnanswered(answers: Record<number, number>): number[] {
  return sections
    .flatMap(s => s.questions.map(q => q.id))
    .filter(id => answers[id] === undefined);
}

export function getRiskLabel(risk: number): { text: string; color: string; bg: string } {
  if (risk >= 70) return { text: '高風險', color: 'text-red-600', bg: 'bg-red-50' };
  if (risk >= 40) return { text: '中風險', color: 'text-amber-600', bg: 'bg-amber-50' };
  return { text: '低風險', color: 'text-emerald-600', bg: 'bg-emerald-50' };
}

export function getLevelConfig(level: BehaviorScore['level']) {
  switch (level) {
    case 'severe':
      return { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', label: '嚴重' };
    case 'moderate':
      return { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', label: '中等' };
    case 'mild':
      return { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', label: '輕微' };
    default:
      return { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', label: '正常' };
  }
}
