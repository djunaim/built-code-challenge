import { Action, Reducer } from 'redux';
import { ArchitectActionTypes, INCREMENT_ARCHITECT, DECREMENT_ARCHITECT} from './models/actions';
import { Architect } from './models/Architect';

const defaultState: Architect = {
  count: 0
}

export const architectReducer: Reducer<Architect, Action> = (state = defaultState, action: ArchitectActionTypes) => {
  const nextState = {
    count: state.count
  }
  switch (action.type) {
    case INCREMENT_ARCHITECT:
      nextState.count = state.count + 1
      return nextState
    case DECREMENT_ARCHITECT:
      nextState.count = state.count - 1
      return nextState
    default:
      return state
  }
}