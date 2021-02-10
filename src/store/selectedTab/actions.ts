import { SELECT_TAB, SelectedTabTypes } from './types'

export function selectTab(tab: number): SelectedTabTypes {
  return {
    type: SELECT_TAB,
    payload: tab
  }
}
