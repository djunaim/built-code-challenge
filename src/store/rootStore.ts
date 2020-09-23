import { createStore, combineReducers } from 'redux';
//TODO: import reducer
import { architectReducer } from './architect/architectReducer';

// contain all reducers
export const rootReducer = combineReducers({ architectReducer })

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)