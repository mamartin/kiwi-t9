import React from "react"
import renderer from "react-test-renderer"

// components
import Suggestion from "../Suggestion"

describe("Suggestion component", () => {
  it("renders with default props", () => {
    const tree = renderer.create(<Suggestion word="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
