/*------------------------------------------------------------*/
//                    arbol de habitaciones
/*------------------------------------------------------------*/

class Nodo {
  constructor(nombre, datos) {
    this.nombre = nombre
    this.datos = datos
    this.hijos = []
  }
}

class Arbol {
  constructor(nombre) {
    this.raiz = new Nodo(nombre, null)
  }

  buscar(nombre, nodo) {
    if (!nodo) nodo = this.raiz
    if (nodo.nombre === nombre) return nodo
    for (let i = 0; i < nodo.hijos.length; i++) {
      let found = this.buscar(nombre, nodo.hijos[i])
      if (found) return found
    }
    return null
  }

  agregar(nombrePadre, nombre, datos) {
    let padre = this.buscar(nombrePadre)
    if (padre) {
      padre.hijos.push(new Nodo(nombre, datos))
    }
  }
}

export { Nodo, Arbol }
