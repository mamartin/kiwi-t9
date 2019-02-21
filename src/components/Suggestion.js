// @flow
import React from "react"
import { View, Text } from "react-native"

const styles = {
  suggestionWrapper: {
    paddingRight: 30,
  },
  text: {
    fontSize: 30,
  },
}

type SuggestionProps = {|
  word: string,
|}

export default class Suggestion extends React.PureComponent<SuggestionProps> {
  render() {
    const { word } = this.props
    return (
      <View style={styles.suggestionWrapper}>
        <Text style={styles.text}>{word}</Text>
      </View>
    )
  }
}
