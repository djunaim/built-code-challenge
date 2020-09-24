import { IS_APPROVED, NOT_APPROVED } from './models/actions';

export const isApproved = () => ({
  type: IS_APPROVED
})

export const notApproved = () => ({
  type: NOT_APPROVED
})
