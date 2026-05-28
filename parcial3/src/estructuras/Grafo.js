/*------------------------------------------------------------*/
/* grafo pa las canciones parecidas */
/*------------------------------------------------------------*/
class Grafo {
  constructor() {
    this.nodos = []
    this.vecinos = {}
  }

  meter(cancion) {
    this.nodos.push(cancion)
    this.vecinos[cancion] = []
  }

  unir(cancion1, cancion2) {
    this.vecinos[cancion1].push(cancion2)
    this.vecinos[cancion2].push(cancion1)
  }

  existe(cancion) {
    return this.nodos.find(n => n === cancion) || null
  }

  parecidas(cancion) {
    if (this.existe(cancion)) {
      return this.vecinos[cancion]
    }
    return []
  }

  ver() {
    console.log(this.vecinos)
  }
}

export default Grafo
