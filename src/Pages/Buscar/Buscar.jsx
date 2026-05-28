/*------------------------------------------------------------*/
//                    buscar
/*------------------------------------------------------------*/

import { useState } from "react"
import Trie from "../../structures/Trie"
import styles from "./Buscar.module.scss"

const trie = new Trie()
trie.meter("carlos morales", { cuarto: "Suite", pieza: "101", piso: "Piso 1", desde: "20/05/2026", hasta: "25/05/2026" })
trie.meter("carlos ramirez", { cuarto: "Doble", pieza: "303", piso: "Piso 3", desde: "22/05/2026", hasta: "28/05/2026" })
trie.meter("ana suarez", { cuarto: "Deluxe", pieza: "205", piso: "Piso 2", desde: "22/05/2026", hasta: "27/05/2026" })
trie.meter("andrea lopez", { cuarto: "Familiar", pieza: "204", piso: "Piso 2", desde: "24/05/2026", hasta: "29/05/2026" })
trie.meter("pedro ortega", { cuarto: "Estandar", pieza: "102", piso: "Piso 1", desde: "25/05/2026", hasta: "28/05/2026" })
trie.meter("pablo herrera", { cuarto: "Presidencial", pieza: "301", piso: "Piso 3", desde: "26/05/2026", hasta: "01/06/2026" })

const todos = [
  { nombre: "carlos morales", cuarto: "Suite", pieza: "101", piso: "Piso 1", desde: "20/05/2026", hasta: "25/05/2026" },
  { nombre: "carlos ramirez", cuarto: "Doble", pieza: "303", piso: "Piso 3", desde: "22/05/2026", hasta: "28/05/2026" },
  { nombre: "ana suarez", cuarto: "Deluxe", pieza: "205", piso: "Piso 2", desde: "22/05/2026", hasta: "27/05/2026" },
  { nombre: "andrea lopez", cuarto: "Familiar", pieza: "204", piso: "Piso 2", desde: "24/05/2026", hasta: "29/05/2026" },
  { nombre: "pedro ortega", cuarto: "Estandar", pieza: "102", piso: "Piso 1", desde: "25/05/2026", hasta: "28/05/2026" },
  { nombre: "pablo herrera", cuarto: "Presidencial", pieza: "301", piso: "Piso 3", desde: "26/05/2026", hasta: "01/06/2026" }
]

function Buscar() {
  const [txt, setTxt] = useState("")
  const [res, setRes] = useState(todos)

  const buscar = (e) => {
    let v = e.target.value
    setTxt(v)
    if (!v) return setRes(todos)

    let porNombre = trie.buscar(v.toLowerCase())
    let porPieza = todos.filter((t) => t.pieza.includes(v))

    let mezclado = [...porNombre.map((r) => ({ nombre: r.nombre, ...r.info }))]
    porPieza.forEach((p) => {
      if (!mezclado.find((m) => m.pieza === p.pieza)) mezclado.push(p)
    })

    setRes(mezclado)
  }

  return (
    <div className={styles.pag}>
      <h2>Buscar huésped</h2>
      <input placeholder="nombre o numero de habitacion" value={txt} onChange={buscar} />
      <p className={styles.ocupadas}>{res.length} ocupadas</p>
      {res.length === 0 && <p className={styles.nada}>no se encontró</p>}
      {res.map((r, i) => (
        <div key={i} className={styles.item}>
          <b>{r.nombre}</b>
          <p>{r.cuarto} - Pieza {r.pieza} - {r.piso}</p>
          <span>{r.desde} → {r.hasta}</span>
        </div>
      ))}
    </div>
  )
}

export default Buscar