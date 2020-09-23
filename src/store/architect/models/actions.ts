export const INCREMENT_ARCHITECT = 'INCREMENT_ARCHITECT';
export const DECREMENT_ARCHITECT = 'DECREMENT_ARCHITECT';

interface IncrementAction {
  type: typeof INCREMENT_ARCHITECT
}

interface DecrementAction {
  type: typeof DECREMENT_ARCHITECT
}

export type ArchitectActionTypes = IncrementAction | DecrementAction;