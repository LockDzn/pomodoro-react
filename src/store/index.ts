import { combineReducers, createStore } from 'redux'
import { selectedTabReducer } from './selectedTab/reducers'
import { activatedReducer } from './activated/reducers'

const rootReducer = combineReducers({
  selectedTab: selectedTabReducer,
  activated: activatedReducer
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
