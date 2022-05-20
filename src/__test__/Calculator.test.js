import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import { act, renderHook } from "@testing-library/react-hooks"
import Calculator from "../Components/stateComponents/Calculator"
import Hooks from "../Components/stateComponents/Hooks"

describe("Testing component Calculator", () => {
  it("Testing compónent Calculator", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Fondo")
    expect(testElement).toBeInTheDocument()
  })
})

describe("Adding one", () => {
  it("Adds one to counter", () => {
    const { result } = renderHook(() => Hooks("", "", ""))
    expect(result.current.numero1).toBe("")
  })
})

describe("Cacular", () => {
  it("Calculates", () => {
    const { result } = renderHook(() => Hooks(1, 1, "+"))
    act(() => {
      result.current.result()
    })
    expect(result.current.resultado).toBe(2)
  })
})

describe("Error", () => {
  it("Si es más de 99999999, causa un error", () => {
    const { result } = renderHook(() => Hooks(999999999, 1, "+"))
    act(() => {
      result.current.result()
    })
    expect(result.current.resultado).toBe("ERROR")
  })
})

describe("ESimbolor", () => {
  it("Si es más de 99999999, causa un error", () => {
    const { result } = renderHook(() => Hooks(-2.12548, "", ""))
    act(() => {
      result.current.opuesto()
    })
    expect(result.current.numero1).toBe(2.12548)
  })
})

describe("Division", () => {
  it("Demuestra los decimales si divide", () => {
    const { result } = renderHook(() => Hooks(9, 7, "/"))
    act(() => {
      result.current.operar()
    })
    expect(result.current.resultado).toBe("1.2857142")
  })
  it("Demuestra los decimales si divide cuando es negativo", () => {
    const { result } = renderHook(() => Hooks(-9, 7, "/"))
    act(() => {
      result.current.operar()
    })
    expect(result.current.resultado).toBe("-1.285714")
  })
})

describe("Testing component Button and screen", () => {
  it("Testing number Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const pantalla = screen.getByTestId("PantallaN")
    expect(pantalla.innerHTML).toBe("7")
  })
  it("Testing Negative Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Negative")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("PantallaN")
    expect(pantalla.innerHTML).toBe("-7")
  })
  it("Testing Reset Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Reset")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("PantallaN")
    expect(pantalla.innerHTML).toBe("")
  })
  it("Testing save", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Plus")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7+")
  })
  it("Testing Result", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Plus")
    fireEvent.click(testElement1)
    const testElement2 = screen.getByTestId("Seven")
    fireEvent.click(testElement2)
    const testElement3 = screen.getByTestId("Equal")
    fireEvent.click(testElement3)
    const pantalla = screen.getByTestId("PantallaN")
    expect(pantalla.innerHTML).toBe("14")
  })
})

describe("Funciones", () => {
  it("Testing add Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Plus")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7+")
  })
  it("Testing minus Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Minus")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7-")
  })
  it("Testing multiply Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Times")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7*")
  })
  it("Testing divide Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Divide")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7/")
  })
  it("Testing module Button", () => {
    render(<Calculator />)
    const testElement = screen.getByTestId("Seven")
    fireEvent.click(testElement)
    const testElement1 = screen.getByTestId("Module")
    fireEvent.click(testElement1)
    const pantalla = screen.getByTestId("Pantalla")
    expect(pantalla.innerHTML).toBe("7%")
  })
})
