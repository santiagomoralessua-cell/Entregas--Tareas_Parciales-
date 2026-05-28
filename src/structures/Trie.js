/*------------------------------------------------------------*/
//                    buscador de huespedes
/*------------------------------------------------------------*/

class Nodo {
  constructor() {
    this.hijos = {}
    this.fin = false
    this.info = null
  }
}

class Trie {
  constructor() {
    this.raiz = new Nodo()
  }

  meter(nombre, info) {
    let actual = this.raiz
    for (let i = 0; i < nombre.length; i++) {
      let c = nombre[i].toLowerCase()
      if (!actual.hijos[c]) {
        actual.hijos[c] = new Nodo()
      }
      actual = actual.hijos[c]
    }
    actual.fin = true
    actual.info = info
  }

  buscar(texto) {
    let actual = this.raiz
    for (let i = 0; i < texto.length; i++) {
      let c = texto[i].toLowerCase()
      if (!actual.hijos[c]) return []
      actual = actual.hijos[c]
    }
    let res = []
    this.recoger(actual, texto, res)
    return res
  }

  recoger(nodo, palabra, res) {
    if (nodo.fin) {
      res.push({ nombre: palabra, info: nodo.info })
    }
    for (let c in nodo.hijos) {
      this.recoger(nodo.hijos[c], palabra + c, res)
    }
  }
}

export default Trie
