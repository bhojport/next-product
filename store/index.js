import { createStore } from 'redux'
import { reducers }  from './reducers'

export const makeStore = (initialState, options) => {
  return createStore(reducers, initialState)
}