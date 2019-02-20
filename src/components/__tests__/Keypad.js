import React from "react"
import renderer from "react-test-renderer"

// components
import Keypad from "../Keypad"

describe("Keypad component", () => {
  it("renders with default props", () => {
    const tree = renderer.create(<Keypad onChange={() => null} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
