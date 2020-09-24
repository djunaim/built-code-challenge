export const YES_BUDGET = 'YES_BUDGET';
export const NO_BUDGET = 'NO_BUDGET';

interface YesAction {
  type: typeof YES_BUDGET
}

interface NoAction {
  type: typeof NO_BUDGET
}

export type BudgetActionTypes = YesAction | NoAction;