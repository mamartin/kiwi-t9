// @flow
import React from "react"
import { BackHandler } from "react-native"

import {
  createStackNavigator,
  NavigationActions,
  createAppContainer,
} from "react-navigation"
import type { NavigationScreenProps } from "react-navigation"
import { connect } from "react-redux"

// screens
import KeypadScreen from "../screens/KeypadScreen"

const AppRouteConfigs = {
  Keypad: {
    screen: KeypadScreen,
  },
}

const AppNavigator = createStackNavigator(AppRouteConfigs, {
  initialRouteName: "Keypad",
})

const App = createAppContainer(AppNavigator)

const mapStateToProps = state => ({
  state: state.nav,
})

class AppWithBackButtonAndState extends React.Component<NavigationScreenProps> {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, state } = this.props
    if (state.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return <App {...this.props} />
  }
}

export default connect(mapStateToProps)(AppWithBackButtonAndState)
