/*------------------------------------------------------------*/
//                    cola
/*------------------------------------------------------------*/

class Cola {
  constructor() {
    this.personas = [];
  }

  agregar(persona) {
    persona.llegada = Date.now() + Math.random() * 1000;
    this.personas.push(persona);
    this.personas.sort((a, b) => a.llegada - b.llegada);
  }

  atender() {
    return this.personas.shift();
  }

  verTodos() {
    return [...this.personas];
  }
}

export default Cola;
