import { SET_ACTIVATED, ActivatedTypes } from './types'

export function setActivated(activated: boolean): ActivatedTypes {
  return {
    type: SET_ACTIVATED,
    payload: activated
  }
}
