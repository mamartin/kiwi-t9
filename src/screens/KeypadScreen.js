// @flow
import React from "react"
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native"

// external libs
import { connect } from "react-redux"

// components
import { Button } from "../components"

// actions
import { onButtonPressed, onGetSuggestionsRequest } from "../redux/KeypadRedux"

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
  },
})

type KeypadScreenProps = {
  onButtonPressed: string => null,
  onGetSuggestionsRequest: string => null,
  numbers: string,
}

type KeypadScreenState = {}

class KeypadScreen extends React.PureComponent<
  KeypadScreenProps,
  KeypadScreenState,
> {
  static navigationOptions = () => ({
    header: null,
  })

  render() {
    const { onButtonPressed, numbers, onGetSuggestionsRequest } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={() => null}
          value={numbers}
        />

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Button onPress={() => onButtonPressed("1")}>abc</Button>
          <Button onPress={() => onGetSuggestionsRequest(numbers)}>def</Button>
          <Button>ghi</Button>
          <Button>jkl</Button>
          <Button>mno</Button>
          <Button>pqrs</Button>
          <Button>tuv</Button>
          <Button>wxyz</Button>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  numbers: state.keypad.numbers,
})

const mapDispatchToProps = {
  onButtonPressed,
  onGetSuggestionsRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeypadScreen)
