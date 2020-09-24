import { Action, Reducer } from 'redux';
import { LenderActionTypes, IS_APPROVED, NOT_APPROVED } from './models/actions';
import { Lender } from './models/Lender';

const defaultState: Lender = {
  isApproved: false
}

export const lenderReducer: Reducer<Lender, Action> = (state = defaultState, action: LenderActionTypes) => {
  const nextState = {
    isApproved: state.isApproved
  }
  switch (action.type) {
    case IS_APPROVED:
      nextState.isApproved = true
      return nextState
    case NOT_APPROVED:
      nextState.isApproved = false
      return nextState
    default:
      return state
  }
}