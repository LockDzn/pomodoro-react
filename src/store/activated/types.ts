export const SET_ACTIVATED = 'SET_ACTIVATED'

interface ActivatedAction {
  type: typeof SET_ACTIVATED
  payload: boolean
}

export type ActivatedTypes = ActivatedAction
