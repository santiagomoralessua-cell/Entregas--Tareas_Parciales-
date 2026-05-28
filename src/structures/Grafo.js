/*------------------------------------------------------------*/
//                    lugares turisticos
/*------------------------------------------------------------*/

class Grafo {
  constructor() {
    this.sitios = []
    this.rutas = []
  }

  meterSitio(nombre) {
    this.sitios.push(nombre)
  }

  conectar(a, b) {
    this.rutas.push({ a, b })
  }

  vecinos(sitio) {
    let res = []
    for (let i = 0; i < this.rutas.length; i++) {
      if (this.rutas[i].a === sitio) res.push(this.rutas[i].b)
      if (this.rutas[i].b === sitio) res.push(this.rutas[i].a)
    }
    return res
  }
}

export default Grafo
