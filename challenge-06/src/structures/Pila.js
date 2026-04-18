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

  verTodos() {
    return [...this.libros].reverse();
  }
}

export default Pila;
