/*------------------------------------------------------------*/
//                    grafo
/*------------------------------------------------------------*/

class Grafo {
  constructor() {
    this.nodos = [];
    this.enlaces = [];
  }

  agregarPersona(nombre, edad) {
    this.nodos.push({ id: nombre, tipo: "persona", edad });
  }

  agregarCiudad(nombre) {
    this.nodos.push({ id: nombre, tipo: "ciudad" });
  }

  conectar(persona, ciudad) {
    this.enlaces.push({ source: persona, target: ciudad });
  }

  personasDeCiudad(ciudad) {
    const ids = this.enlaces
      .filter((e) => e.target === ciudad)
      .map((e) => e.source);
    return this.nodos.filter((n) => ids.includes(n.id));
  }
}

export default Grafo;
