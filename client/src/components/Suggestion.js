// @flow
import React from "react"
import { TouchableOpacity, Text } from "react-native"

const styles = {
  suggestionWrapper: {
    display: "flex",
    marginRight: 30,
    height: 60,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
}

type SuggestionProps = {|
  word: string,
  onPress: (?string) => null,
|}

export default class Suggestion extends React.PureComponent<SuggestionProps> {
  render() {
    const { word, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={() => {
          if (typeof onPress === "function") {
            onPress(word)
          }
        }}
        style={styles.suggestionWrapper}
      >
        <Text style={styles.text}>{word}</Text>
      </TouchableOpacity>
    )
  }
}
