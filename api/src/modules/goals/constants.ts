export const GoalStatus = {
  Draft: 'draft',
  Splitting: 'splitting',
  InProgress: 'in_progress',
  Done: 'done',
} as const;

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];
