import { Action, Reducer } from 'redux';
import { BudgetActionTypes, YES_BUDGET, NO_BUDGET } from './models/actions';
import { Budget } from './models/Budget';

const defaultState: Budget = {
  budget: false
}

export const budgetReducer: Reducer<Budget, Action> = (state = defaultState, action: BudgetActionTypes) => {
  const nextState = {
    budget: state.budget
  }
  switch (action.type) {
    case YES_BUDGET:
      nextState.budget = true
      return nextState
    case NO_BUDGET:
      nextState.budget = false
      return nextState
    default:
      return state
  }
}