import { YES_BUDGET, NO_BUDGET } from './models/actions';

export const yesBudget = () => ({
  type: YES_BUDGET
})

export const noBudget = () => ({
  type: NO_BUDGET
})
