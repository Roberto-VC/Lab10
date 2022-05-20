/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */

"not strict"

import { useState } from "react"

export default function Hooks(NUMBER1 = "", NUMBER2 = "", OPERAND = "") {
  const [numero1, setNumero1] = useState(NUMBER1)
  const [numero2, setNumero2] = useState(NUMBER2)
  const [operando, setOperando] = useState(OPERAND)
  const [resultado, setResultado] = useState("")

  function evil() {
    let res = 0
    if (operando === "+") {
      res = parseFloat(numero1) + parseFloat(numero2)
    } else if (operando === "-") {
      res = numero1 - numero2
    } else if (operando === "*") {
      res = numero1 * numero2
    } else if (operando === "/") {
      res = String(numero1 / numero2).substring(0, 9)
    } else if (operando === "%") {
      res = numero1 % numero2
    }
    return res
  }

  const valor = (e) => {
    if (resultado !== "" && resultado !== "ERROR") {
      setNumero1(resultado)
      setResultado("")
    }
    if (operando === "" && resultado !== "ERROR") {
      if (numero1.length >= 9) {
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
      if (numero2.length >= 9) {
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
      if (evil() <= 999999999) {
        setNumero1(evil())
        if (operando === "/") {
          setResultado(String(evil()).substring(0, 9))
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
    const resultF = evil()
    if ((resultF <= 999999999 && resultF >= -99999999) || operando === "/") {
      setResultado(resultF)
      if (
        operando === "/" ||
        String(numero1).includes(".") ||
        String(numero2).includes(".")
      ) {
        setResultado(String(resultF).substring(0, 9))
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
    console.log(numero1)
    if (numero2 === "" && String(numero1).length < 9) {
      setNumero1(-1 * numero1)
    } else if (resultado === "" && String(numero2).length < 9) {
      setNumero2(-1 * numero2)
    }
    if (numero2 === "" && numero1 < 0 && String(numero1).length < 9) {
      setNumero1(-1 * numero1)
    }
    if (resultado !== "" && String(resultado).length < 9) {
      console.log(":)")
      setResultado(-1 * resultado)
    }
  }

  return {
    numero1,
    numero2,
    operando,
    resultado,
    valor,
    operar,
    reset,
    result,
    opuesto,
  }
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
