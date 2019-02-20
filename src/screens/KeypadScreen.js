// @flow
import React from "react"
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native"

// external libs
import { connect } from "react-redux"

// components
import { Keypad } from "../components"

// actions
import { onGetSuggestionsRequest } from "../redux/KeypadRedux"

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
  },
})

type KeypadScreenProps = {
  onGetSuggestionsRequest: string => null,
  numbers: string,
  suggestedWords: Array<string>,
}

type KeypadScreenState = {}

class KeypadScreen extends React.PureComponent<
  KeypadScreenProps,
  KeypadScreenState,
> {
  static navigationOptions = () => ({
    header: null,
  })

  handleKeypadChanged = numbers => {
    const { onGetSuggestionsRequest } = this.props
    onGetSuggestionsRequest(numbers)
  }

  render() {
    const { numbers, suggestedWords } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={() => null}
          value={numbers}
        />
        {suggestedWords.map(word => (
          <Text key={word}>{word}</Text>
        ))}
        <Keypad onChange={this.handleKeypadChanged} />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  numbers: state.keypad.numbers,
  suggestedWords: state.keypad.suggestedWords,
})

const mapDispatchToProps = {
  onGetSuggestionsRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeypadScreen)
