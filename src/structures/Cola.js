/*------------------------------------------------------------*/
//                    fila de llegadas
/*------------------------------------------------------------*/

class Cola {
  constructor() {
    this.fila = []
  }

  agregar(huesped) {
    this.fila.push(huesped)
  }

  siguiente() {
    return this.fila.shift()
  }

  verPrimero() {
    return this.fila[0]
  }

  estaVacia() {
    return this.fila.length === 0
  }

  tamano() {
    return this.fila.length
  }

  verTodos() {
    return [...this.fila]
  }
}

export default Cola
