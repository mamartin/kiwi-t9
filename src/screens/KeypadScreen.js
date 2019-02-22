// @flow
import React from "react"
import { SafeAreaView, StyleSheet, FlatList, View, Text } from "react-native"

// external libs
import { connect } from "react-redux"

// components
import { Keypad, Suggestion } from "../components"

// actions
import { onGetSuggestionsRequest } from "../redux/KeypadRedux"
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
  },
})

type KeypadScreenProps = {
  onGetSuggestionsRequest: string => null,
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
    const { suggestedWords } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.suggestionsWrapper}>
          <FlatList
            data={suggestedWords}
            renderItem={this.renderSuggestion}
            keyExtractor={this.keyExtractor}
            horizontal
          />
        </View>
        <Keypad onChange={this.handleKeypadChanged} style={styles.keypad} />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  suggestedWords: state.keypad.suggestedWords,
})

const mapDispatchToProps = {
  onGetSuggestionsRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeypadScreen)
