import React from "react"
import renderer from "react-test-renderer"

// components
import Button from "../Button"

describe("Button component", () => {
  it("renders with default props", () => {
    const tree = renderer.create(<Button>Button</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
