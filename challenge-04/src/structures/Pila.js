/*------------------------------------------------------------*/
//                    pila
/*------------------------------------------------------------*/

class Pila {
  constructor() {
    this.libros = [];
  }

  meter(libro) {
    this.libros.push(libro);
  }

  sacar() {
    return this.libros.pop();
  }

  verUltimo() {
    return this.libros[this.libros.length - 1];
  }

  estaVacia() {
    return this.libros.length === 0;
  }

  verTodos() {
    return [...this.libros].reverse();
  }
}

export default Pila;
