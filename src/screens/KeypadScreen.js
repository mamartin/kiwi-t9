// @flow
import React from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class KeypadScreen extends React.PureComponent<null> {
  static navigationOptions = () => ({
    header: null,
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Keypad Screen</Text>
      </SafeAreaView>
    )
  }
}

export default KeypadScreen
