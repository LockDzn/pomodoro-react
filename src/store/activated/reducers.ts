import { SET_ACTIVATED, ActivatedTypes } from './types'

const initialState: boolean = false

export function activatedReducer(state = initialState, action: ActivatedTypes) {
  switch (action.type) {
    case SET_ACTIVATED:
      return action.payload
    default:
      return state
  }
}
