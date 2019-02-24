// @flow
import "rxjs"
import React from "react"
import { Provider } from "react-redux"
// $FlowFixMe
import { PersistGate } from "redux-persist/integration/react"

// initialization
import initStore from "./src/services/configureRedux"
import AppWithNavigationState from "./src/services/configureNavigation"

const { store, persistor } = initStore()

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}
