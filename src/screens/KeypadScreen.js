// @flow
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

// components
import { Button } from "../components"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

class KeypadScreen extends React.PureComponent<null> {
  static navigationOptions = () => ({
    header: null,
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button style={{ width: "33%" }}>abc</Button>
        <Button style={{ width: "33%" }}>def</Button>
        <Button style={{ width: "33%" }}>ghi</Button>
        <Button style={{ width: "33%" }}>jkl</Button>
        <Button style={{ width: "33%" }}>mno</Button>
        <Button style={{ width: "33%" }}>pqrs</Button>
        <Button style={{ width: "33%" }}>tuv</Button>
        <Button style={{ width: "33%" }}>wxyz</Button>
      </SafeAreaView>
    )
  }
}

export default KeypadScreen
