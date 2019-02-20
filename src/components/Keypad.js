// @flow
import React from "react"
import { View } from "react-native"

// components
import { Button } from "."

const styles = {
  keypadWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
}

type KeypadProps = {|
  onChange: string => null,
|}

type KeypadState = {
  numbers: string,
}

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
]

export default class Keypad extends React.PureComponent<
  KeypadProps,
  KeypadState,
> {
  state = {
    numbers: "",
  }

  handleButtonPressed = (number: string) => {
    const { onChange } = this.props
    const { numbers } = this.state

    this.setState({ numbers: `${numbers}${number}` }, () => {
      const { numbers } = this.state
      onChange(numbers)
    })
  }

  render() {
    // const { onPress } = this.props
    return (
      <View style={styles.keypadWrapper}>
        {keypad.map(button => (
          <Button
            key={button.number}
            onPress={() => this.handleButtonPressed(button.number)}
          >
            {button.letters}
          </Button>
        ))}
      </View>
    )
  }
}
