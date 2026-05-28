/*------------------------------------------------------------*/
//                    habitaciones
/*------------------------------------------------------------*/

import { Arbol } from "../../structures/Arbol"
import styles from "./Habitaciones.module.scss"

const arbol = new Arbol("Hotel El Dorado")
arbol.agregar("Hotel El Dorado", "Piso 1", null)
arbol.agregar("Hotel El Dorado", "Piso 2", null)
arbol.agregar("Hotel El Dorado", "Piso 3", null)
arbol.agregar("Piso 1", "Suite", { precio: 350000, camas: 2 })
arbol.agregar("Piso 1", "Estandar", { precio: 120000, camas: 1 })
arbol.agregar("Piso 2", "Deluxe", { precio: 500000, camas: 3 })
arbol.agregar("Piso 2", "Familiar", { precio: 280000, camas: 2 })
arbol.agregar("Piso 3", "Presidencial", { precio: 800000, camas: 4 })
arbol.agregar("Piso 3", "Doble", { precio: 200000, camas: 2 })

function Habitaciones() {
  return (
    <div className={styles.pag}>
      <h2>Habitaciones</h2>
      {arbol.raiz.hijos.map((piso, i) => (
        <div key={i} className={styles.piso}>
          <h3>{piso.nombre}</h3>
          <div className={styles.cuartos}>
            {piso.hijos.map((c, j) => (
              <div key={j} className={styles.card}>
                <h4>{c.nombre}</h4>
                <p>${c.datos.precio.toLocaleString("es-CO")}</p>
                <span>{c.datos.camas} camas</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Habitaciones