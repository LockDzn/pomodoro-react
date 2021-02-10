import { SELECT_TAB, SelectedTabTypes } from './types'

const initialState: number = 0

export function selectedTabReducer(
  state = initialState,
  action: SelectedTabTypes
) {
  switch (action.type) {
    case SELECT_TAB:
      return action.payload
    default:
      return state
  }
}
