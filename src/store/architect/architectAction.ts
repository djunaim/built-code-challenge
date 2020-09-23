import { INCREMENT_ARCHITECT, DECREMENT_ARCHITECT} from './models/actions';

// provide axn for functionality

export const incrementArchitect = () => ({
  type: INCREMENT_ARCHITECT
})

export const decrementArchitect = () => ({
  type: DECREMENT_ARCHITECT
})