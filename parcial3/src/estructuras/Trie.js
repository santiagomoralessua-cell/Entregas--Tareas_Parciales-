/*------------------------------------------------------------*/
/* nodo del trie */
/*------------------------------------------------------------*/
class Nodo {
  constructor() {
    this.hijos = {}
    this.esFinal = false
  }
}

/*------------------------------------------------------------*/
/* trie pa buscar canciones */
/*------------------------------------------------------------*/
class Trie {
  constructor() {
    this.raiz = new Nodo()
  }

  meter(cancion) {
    let nodo = this.raiz
    for (let c of cancion.toLowerCase()) {
      if (!nodo.hijos[c]) {
        nodo.hijos[c] = new Nodo()
      }
      nodo = nodo.hijos[c]
    }
    nodo.esFinal = true
  }

  existe(cancion) {
    let nodo = this.raiz
    for (let c of cancion.toLowerCase()) {
      if (!nodo.hijos[c]) return false
      nodo = nodo.hijos[c]
    }
    return nodo.esFinal
  }

  autocompletar(texto) {
    let nodo = this.raiz
    for (let c of texto.toLowerCase()) {
      if (!nodo.hijos[c]) return []
      nodo = nodo.hijos[c]
    }
    let lista = []
    this.sacarPalabras(nodo, texto.toLowerCase(), lista)
    return lista
  }

  sacarPalabras(nodo, texto, lista) {
    if (nodo.esFinal) {
      lista.push(texto)
    }
    for (let c in nodo.hijos) {
      this.sacarPalabras(nodo.hijos[c], texto + c, lista)
    }
  }
}

export default Trie
