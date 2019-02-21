// @flow
import React from "react"
import { SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native"

// external libs
import { connect } from "react-redux"

// components
import { Keypad, Suggestion } from "../components"

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

  keyExtractor = word => word

  renderSuggestion = suggestion => <Suggestion word={suggestion.item} />

  render() {
    const { numbers, suggestedWords } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={() => null}
          value={numbers}
        />
        <FlatList
          data={suggestedWords}
          renderItem={this.renderSuggestion}
          keyExtractor={this.keyExtractor}
          horizontal
        />
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
