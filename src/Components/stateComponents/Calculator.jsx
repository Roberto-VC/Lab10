/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */

"not strict"

import React from "react"
import "./Calculator.css"
import Hooks from "./Hooks"

export default function Calculator() {
  const {
    numero1,
    numero2,
    operando,
    resultado,
    valor,
    operar,
    reset,
    result,
    opuesto,
  } = Hooks()

  return (
    <div className="Entero">
      <div className="Fondo" id="Fondo" data-testid="Fondo" />
      <br />
      <div className="Todo">
        <div className="Pantalla" data-testid="Pantalla">{operando ? numero1 + operando : ""}</div>
        <div className="PantallaN" data-testid="PantallaN">
          {!operando && !resultado ? numero1 : !resultado ? numero2 : resultado}
        </div>
        <div className="Teclas">
          {" "}
          <button type="button" onClick={reset} id="Reset" data-testid="Reset">
            AC
          </button>
          <button type="button" onClick={opuesto} id="Negative" data-testid="Negative">
            +/-
          </button>
          <button type="button" onClick={() => operar("%")} id="Module" data-testid="Module">
            %
          </button>
          <button type="button" onClick={() => operar("+")} id="Plus" data-testid="Plus">
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
          <button type="button" onClick={() => operar("-")} id="Minus" data-testid="Minus">
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
          <button type="button" onClick={() => operar("*")} id="Times" data-testid="Times">
            *
          </button>
          <button type="button" key={7} name={7} onClick={valor} id="Seven" data-testid="Seven">
            7
          </button>
          <button type="button" key={8} name={8} onClick={valor} id="Eight">
            8
          </button>
          <button type="button" key={9} name={9} onClick={valor} id="Nine">
            9
          </button>
          <button type="button" onClick={() => operar("/")} id="Divide" data-testid="Divide">
            /
          </button>
          <button type="button" key={0} name={0} onClick={valor} id="Zero">
            0
          </button>
          <button type="button" key="." name="." onClick={valor} id="Dot">
            .
          </button>
          <button type="button" onClick={result} id="Equal" data-testid="Equal">
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
