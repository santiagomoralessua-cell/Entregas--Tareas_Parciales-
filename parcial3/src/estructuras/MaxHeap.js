/*------------------------------------------------------------*/
/* heap pa las canciones mas sonadas */
/*------------------------------------------------------------*/
class MaxHeap {
  constructor() {
    this.lista = []
  }

  meter(nombre, veces) {
    this.lista.push({ nombre, veces })
    this.subir(this.lista.length - 1)
  }

  subir(pos) {
    let papa = Math.floor((pos - 1) / 2)
    while (pos > 0 && this.lista[pos].veces > this.lista[papa].veces) {
      let aux = this.lista[pos]
      this.lista[pos] = this.lista[papa]
      this.lista[papa] = aux
      pos = papa
      papa = Math.floor((pos - 1) / 2)
    }
  }

  bajar(pos) {
    let grande = pos
    let izq = 2 * pos + 1
    let der = 2 * pos + 2

    if (izq < this.lista.length && this.lista[izq].veces > this.lista[grande].veces) {
      grande = izq
    }
    if (der < this.lista.length && this.lista[der].veces > this.lista[grande].veces) {
      grande = der
    }
    if (grande !== pos) {
      let aux = this.lista[pos]
      this.lista[pos] = this.lista[grande]
      this.lista[grande] = aux
      this.bajar(grande)
    }
  }

  sacar() {
    if (this.lista.length === 0) return null
    let primero = this.lista[0]
    this.lista[0] = this.lista[this.lista.length - 1]
    this.lista.pop()
    this.bajar(0)
    return primero
  }

  topCanciones(n) {
    let copia = [...this.lista]
    let top = []
    for (let x = 0; x < n && this.lista.length > 0; x++) {
      top.push(this.sacar())
    }
    this.lista = copia
    return top
  }
}

export default MaxHeap
