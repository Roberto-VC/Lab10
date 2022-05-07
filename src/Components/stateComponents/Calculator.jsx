/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */

"not strict"

import React, { useState } from "react"
import "./Calculator.css"

export default function Calculator() {
  const [numero1, setNumero1] = useState("")
  const [numero2, setNumero2] = useState("")
  const [operando, setOperando] = useState("")
  const [resultado, setResultado] = useState("")

  const valor = (e) => {
    if (resultado !== "" && resultado !== "ERROR") {
      setNumero1(resultado)
      setResultado("")
    }
    if (operando === "" && resultado !== "ERROR") {
      if (numero1.length >= 8) {
        console.log(":(")
      } else if (numero1 === "") {
        setNumero1(e.target.name)
      } else if (
        String(numero1).includes(".") &&
        e.target.name.toString() === "."
      ) {
        setNumero1(numero1)
      } else {
        setNumero1(numero1 + e.target.name.toString())
      }
    } else if (operando !== "" && resultado !== "ERROR") {
      if (numero2.length >= 8) {
        console.log(":(")
      } else if (numero2 === "") {
        setNumero2(e.target.name)
      } else if (
        String(numero2).includes(".") &&
        e.target.name.toString() === "."
      ) {
        setNumero2(numero2)
      } else {
        setNumero2(numero2 + e.target.name.toString())
      }
    }
  }

  function operar(operador) {
    if (numero2 !== "") {
      if (eval(numero1 + operando + numero2) <= 999999999) {
        setNumero1(eval(numero1 + operando + numero2))
        if (operando === "/") {
          setResultado(
            String(eval(numero1 + operando + numero2)).substring(0, 9)
          )
          console.log(":)")
        }
        setNumero2("")
        setOperando(operador)
      } else {
        setNumero1("")
        setNumero2("")
        setOperando("")
        setResultado("ERROR")
      }
    } else {
      setOperando(operador)
    }
  }

  function reset() {
    setNumero1("")
    setNumero2("")
    setOperando("")
    setResultado("")
  }

  function result() {
    if (
      (eval(numero1 + operando + numero2) <= 999999999 &&
        eval(numero1 + operando + numero2) >= -99999999) ||
      operando === "/"
    ) {
      setResultado(eval(numero1 + operando + numero2))
      if (
        operando === "/" ||
        String(numero1).includes(".") ||
        String(numero2).includes(".")
      ) {
        setResultado(String(eval(numero1 + operando + numero2)).substring(0, 9))
        console.log(":)")
      }
      setNumero1("")
      setNumero2("")
      setOperando("")
    } else {
      setResultado("ERROR")
    }
  }

  function opuesto() {
    if (numero2 === "" && String(numero1).length < 9) {
      setNumero1(-1 * numero1)
    } else if (resultado === "" && String(numero2).length < 9) {
      setNumero2(-1 * numero2)
    }
    if (resultado !== "" && String(resultado).length < 9) {
      console.log(":)")
      setResultado(-1 * resultado)
    }
  }

  return (
    <div className="Entero">
      <div className="Fondo" id="Fondo" />
      <br />
      <div className="Todo">
        <div className="Pantalla">{operando ? numero1 + operando : ""}</div>
        <div className="PantallaN">
          {!operando && !resultado ? numero1 : !resultado ? numero2 : resultado}
        </div>
        <div className="Teclas">
          {" "}
          <button type="button" onClick={reset} id="Reset">
            AC
          </button>
          <button type="button" onClick={opuesto} id="Negative">
            +/-
          </button>
          <button type="button" onClick={() => operar("%")} id="Module">
            %
          </button>
          <button type="button" onClick={() => operar("+")} id="Plus">
            +
          </button>
          <button type="button" key="1" name="1" onClick={valor} id="One">
            1
          </button>
          <button type="button" key="2" name="2" onClick={valor} id="Two">
            2
          </button>
          <button type="button" key={3} name={3} onClick={valor} id="Three">
            3
          </button>
          <button type="button" onClick={() => operar("-")} id="Minus">
            -
          </button>
          <button type="button" key={4} name={4} onClick={valor} id="Four">
            4
          </button>
          <button type="button" key={5} name={5} onClick={valor} id="Five">
            5
          </button>
          <button type="button" key={6} name={6} onClick={valor} id="Six">
            6
          </button>
          <button type="button" onClick={() => operar("*")} id="Times">
            *
          </button>
          <button type="button" key={7} name={7} onClick={valor} id="Seven">
            7
          </button>
          <button type="button" key={8} name={8} onClick={valor} id="Eight">
            8
          </button>
          <button type="button" key={9} name={9} onClick={valor} id="Nine">
            9
          </button>
          <button type="button" onClick={() => operar("/")} id="Divide">
            /
          </button>
          <button type="button" key={0} name={0} onClick={valor} id="Zero">
            0
          </button>
          <button type="button" key="." name="." onClick={valor} id="Dot">
            .
          </button>
          <button type="button" onClick={result} id="Equal">
            =
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}

/*


  return (
    <>
      Press a button!
      <div>
        <button name={1} key={1} onClick={handleClick} />
      </div>
    </>
  );
*/
