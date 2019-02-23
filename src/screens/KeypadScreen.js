// @flow
import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
} from "react-native"

// external libs
import { connect } from "react-redux"

// components
import { Keypad, Suggestion } from "../components"

// actions
import {
  onGetSuggestionsRequest,
  onResetSuggestions,
} from "../redux/KeypadRedux"

// styles
import Colors from "../themes/Colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keypad: {
    alignSelf: "flex-end",
  },
  suggestionsWrapper: {
    height: 60,
    backgroundColor: Colors.primary,
    paddingLeft: 20,
    margin: 10,
  },
  messageWrapper: {
    flex: 1,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 10,
  },
  messageText: {
    fontSize: 20,
  },
})

type KeypadScreenProps = {
  onGetSuggestionsRequest: (string, boolean) => null,
  onResetSuggestions: () => null,
  suggestedWords: Array<string>,
}

type KeypadScreenState = {
  message: string,
  numbers: string,
  realWordsOnly: boolean,
}

class KeypadScreen extends React.PureComponent<
  KeypadScreenProps,
  KeypadScreenState,
> {
  static navigationOptions = () => ({
    header: null,
  })

  state = {
    message: "",
    numbers: "",
    realWordsOnly: false,
  }

  handleSuggestionPressed = (suggestion: string) => {
    const { message } = this.state
    const { onResetSuggestions } = this.props
    this.setState({ message: `${message}${suggestion} `, numbers: "" })
    onResetSuggestions()
  }

  handleKeypadButtonPressed = (number: string) => {
    const { numbers, realWordsOnly } = this.state
    const { onGetSuggestionsRequest } = this.props
    let numbersResult = numbers
    let realWordsOnlyChanged = realWordsOnly

    switch (number) {
      case "1":
        break
      case "*":
        numbersResult = numbers.slice(0, -1)
        break
      case "0":
        realWordsOnlyChanged = !realWordsOnly
        break
      case "#":
        numbersResult = ""
        break
      default:
        numbersResult = `${numbers}${number}`
    }
    this.setState(
      { numbers: numbersResult, realWordsOnly: realWordsOnlyChanged },
      () => {
        onGetSuggestionsRequest(numbersResult, realWordsOnlyChanged)
      },
    )
  }

  keyExtractor = (word: string) => word

  renderSuggestion = (suggestion: { item: string }) => (
    <Suggestion word={suggestion.item} onPress={this.handleSuggestionPressed} />
  )

  render() {
    const { suggestedWords } = this.props
    const { message } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.messageWrapper}>
          <Text style={styles.messageText}>{message}</Text>
        </ScrollView>
        <View style={styles.suggestionsWrapper}>
          <FlatList
            data={suggestedWords}
            renderItem={this.renderSuggestion}
            keyExtractor={this.keyExtractor}
            horizontal
          />
        </View>
        <Keypad
          onPress={this.handleKeypadButtonPressed}
          style={styles.keypad}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  suggestedWords: state.keypad.suggestedWords,
})

const mapDispatchToProps = {
  onGetSuggestionsRequest,
  onResetSuggestions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeypadScreen)
