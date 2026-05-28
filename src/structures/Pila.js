/*------------------------------------------------------------*/
//                    historial de reservas
/*------------------------------------------------------------*/

class Pila {
  constructor() {
    this.reservas = []
  }

  meter(reserva) {
    this.reservas.push(reserva)
  }

  sacar() {
    return this.reservas.pop()
  }

  verUltimo() {
    return this.reservas[this.reservas.length - 1]
  }

  estaVacia() {
    return this.reservas.length === 0
  }

  tamano() {
    return this.reservas.length
  }

  verTodos() {
    return [...this.reservas].reverse()
  }
}

export default Pila
