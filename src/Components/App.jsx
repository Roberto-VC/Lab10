/*
    Tutorial de donde se inspiro el proyecto
    https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm

*/

import React from "react"
import "./App.css"
import Calculator from "./stateComponents/Calculator"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Calculator />
  }
}

export default App
