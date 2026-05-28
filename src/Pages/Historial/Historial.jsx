/*------------------------------------------------------------*/
//                    historial
/*------------------------------------------------------------*/

import { useState } from "react"
import Pila from "../../structures/Pila"
import styles from "./Historial.module.scss"

const pila = new Pila()
pila.meter({ quien: "Carlos Morales", cuarto: "Suite", pieza: "101", piso: "Piso 1", desde: "20/05/2026", hasta: "25/05/2026", precio: 350000 })
pila.meter({ quien: "Ana suarez", cuarto: "Deluxe", pieza: "205", piso: "Piso 2", desde: "22/05/2026", hasta: "27/05/2026", precio: 500000 })
pila.meter({ quien: "Pedro ortega", cuarto: "Doble", pieza: "302", piso: "Piso 3", desde: "25/05/2026", hasta: "28/05/2026", precio: 200000 })

function Historial() {
  const [lista, setLista] = useState(pila.verTodos())
  const [nom, setNom] = useState("")
  const [cto, setCto] = useState("")
  const [pza, setPza] = useState("")
  const [pso, setPso] = useState("")
  const [desde, setDesde] = useState("")
  const [hasta, setHasta] = useState("")
  const [pre, setPre] = useState("")

  const meter = () => {
    if (!nom || !cto || !pza || !pso || !desde || !hasta || !pre) return alert("llena todo")
    pila.meter({ quien: nom, cuarto: cto, pieza: pza, piso: pso, desde, hasta, precio: Number(pre) })
    setLista(pila.verTodos())
    setNom("")
    setCto("")
    setPza("")
    setPso("")
    setDesde("")
    setHasta("")
    setPre("")
  }

  return (
    <div className={styles.pag}>
      <h2>Historial de reservas</h2>
      <div className={styles.form}>
        <input placeholder="nombre" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input placeholder="tipo (Suite, Deluxe...)" value={cto} onChange={(e) => setCto(e.target.value)} />
        <input placeholder="# pieza" value={pza} onChange={(e) => setPza(e.target.value)} />
        <input placeholder="piso" value={pso} onChange={(e) => setPso(e.target.value)} />
        <input placeholder="desde (dd/mm/aaaa)" value={desde} onChange={(e) => setDesde(e.target.value)} />
        <input placeholder="hasta (dd/mm/aaaa)" value={hasta} onChange={(e) => setHasta(e.target.value)} />
        <input placeholder="precio" type="number" value={pre} onChange={(e) => setPre(e.target.value)} />
        <button onClick={meter}>Meter</button>
      </div>
      {lista.length === 0 && <p>no hay reservas</p>}
      {lista.map((r, i) => (
        <div key={i} className={styles.item}>
          <b>{r.quien}</b>
          <p>{r.cuarto} - Pieza {r.pieza} - {r.piso}</p>
          <span>{r.desde} → {r.hasta} | ${r.precio.toLocaleString("es-CO")}</span>
        </div>
      ))}
    </div>
  )
}

export default Historial