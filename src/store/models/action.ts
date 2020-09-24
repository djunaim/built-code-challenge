//TODO: combining all actions for separate store
import { ArchitectActionTypes } from '../architect/models/actions';
import { BudgetActionTypes } from '../budget/models/actions';

export type AppActions = ArchitectActionTypes | BudgetActionTypes; // TODO Action types