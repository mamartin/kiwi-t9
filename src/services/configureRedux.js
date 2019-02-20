// @flow
import { createStore, applyMiddleware, combineReducers } from "redux"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createLogger } from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import { createBlacklistFilter } from "redux-persist-transform-filter"
import storage from "redux-persist/lib/storage"

import {
  reducer as keypadReducer,
  epics as keypadEpics,
} from "../redux/KeypadRedux"

const epics = [...keypadEpics]

const blacklistFilter = createBlacklistFilter("auth", ["loading"])

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["nav"],
  transforms: [blacklistFilter],
}

const reducers = {
  keypad: keypadReducer,
}

export default () => {
  const logger = createLogger({ collapsed: true })
  const middleware = []

  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  })
  middleware.push(epicMiddleware)
  middleware.push(logger)

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(reducers),
  )

  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middleware),
  )
  epicMiddleware.run(combineEpics(...epics))

  const persistor = persistStore(store)

  return { store, persistor }
}
