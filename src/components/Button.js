// @flow
import React from "react"
import { TouchableOpacity, Text } from "react-native"

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 60,
    height: 60,
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
}

type ButtonProps = {|
  onPress: () => void,
  children: string | React.DOM,
|}

export default class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {typeof children === "string" ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
}
