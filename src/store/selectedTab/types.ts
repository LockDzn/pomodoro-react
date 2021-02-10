export const SELECT_TAB = 'SELECT_TAB'

interface SelectTabAction {
  type: typeof SELECT_TAB
  payload: number
}

export type SelectedTabTypes = SelectTabAction
