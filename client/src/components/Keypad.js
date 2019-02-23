// @flow
import React from "react"
import { View } from "react-native"

// components
import { Button } from "."

const styles = {
  keypadWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}

type KeypadProps = {|
  onPress: string => null,
|}

const keypad = [
  { number: "1", letters: "" },
  { number: "2", letters: "abc" },
  { number: "3", letters: "def" },
  { number: "4", letters: "ghi" },
  { number: "5", letters: "jkl" },
  { number: "6", letters: "mno" },
  { number: "7", letters: "pqrs" },
  { number: "8", letters: "tuv" },
  { number: "9", letters: "vwxy" },
  { number: "*", letters: "DELETE" },
  { number: "0", letters: "REAL" },
  { number: "#", letters: "RESET" },
]

export default class Keypad extends React.PureComponent<KeypadProps> {
  render() {
    const { onPress } = this.props
    return (
      <View style={styles.keypadWrapper}>
        {keypad.map(button => (
          <Button
            key={button.number}
            onPress={() => onPress(button.number)}
            number={button.number}
          >
            {button.letters}
          </Button>
        ))}
      </View>
    )
  }
}
