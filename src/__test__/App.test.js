import { render, screen } from "@testing-library/react"
import React from "react"
import ReactDom from "react-dom"
import App from "../Components/App"

describe("Testing component Calculator", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<App />, div)
    ReactDom.unmountComponentAtNode(div)
  })
})
