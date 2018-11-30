import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import {
  reducers as otherReducers,
} from './other'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const middleware = [ thunk, promiseMiddleware() ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const rootReducer = combineReducers({
  ...otherReducers,
})

const initStore = () => {
  const persistedState = loadState()

  let store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middleware)
  )

  store.subscribe(throttle(() => {
    let state = store.getState()
    saveState({
      //nothing persisted yet
    })
  }, 1000))

  return store
}

export default initStore
