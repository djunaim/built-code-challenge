export const IS_APPROVED = 'IS_APPROVED';
export const NOT_APPROVED = 'NOT_APPROVED';

interface IsApproved {
  type: typeof IS_APPROVED
}

interface NotApproved {
  type: typeof NOT_APPROVED
}

export type LenderActionTypes = IsApproved | NotApproved;