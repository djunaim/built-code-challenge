import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
//TODO: import reducer
import { architectReducer } from './architect/architectReducer';
import { budgetReducer } from './budget/budgetReducer';
import { lenderReducer } from './lender/lenderReducer';

const logger = createLogger();

// contain all reducers
export const rootReducer = combineReducers({ architectReducer, budgetReducer, lenderReducer })

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(logger))