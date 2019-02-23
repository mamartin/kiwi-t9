// @flow
import React from "react"
import { TouchableOpacity, Text } from "react-native"
import Colors from "../themes/Colors"

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    width: "30%",
    margin: 3,
  },
  text: {
    color: "white",
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
}

type ButtonProps = {|
  onPress: () => void,
  children: string,
  number: string,
|}

export default class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, onPress, number } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    )
  }
}
