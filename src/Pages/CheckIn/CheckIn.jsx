/*------------------------------------------------------------*/
//                    recepcion
/*------------------------------------------------------------*/

import { useState } from "react"
import Cola from "../../structures/Cola"
import styles from "./CheckIn.module.scss"

const cola = new Cola()
cola.agregar({ nombre: "Carlos morales", piso: "Piso 1", cuarto: "Suite", pieza: "101", desde: "27/05/2026", hasta: "30/05/2026", salida: "2:00 PM" })
cola.agregar({ nombre: "Ana suarez", piso: "Piso 2", cuarto: "Deluxe", pieza: "205", desde: "27/05/2026", hasta: "29/05/2026", salida: "1:00 PM" })
cola.agregar({ nombre: "Pedro ortega", piso: "Piso 3", cuarto: "Doble", pieza: "302", desde: "28/05/2026", hasta: "31/05/2026", salida: "12:00 PM" })

function CheckIn() {
  const [fila, setFila] = useState(cola.verTodos())
  const [nom, setNom] = useState("")
  const [piso, setPiso] = useState("")
  const [cuarto, setCuarto] = useState("")
  const [pieza, setPieza] = useState("")
  const [desde, setDesde] = useState("")
  const [hasta, setHasta] = useState("")
  const [salida, setSalida] = useState("")

  const meter = () => {
    if (!nom || !piso || !cuarto || !pieza || !desde || !hasta || !salida) return alert("llena todo")
    cola.agregar({ nombre: nom, piso, cuarto, pieza, desde, hasta, salida })
    setFila(cola.verTodos())
    setNom("")
    setPiso("")
    setCuarto("")
    setPieza("")
    setDesde("")
    setHasta("")
    setSalida("")
  }

  const atender = () => {
    if (cola.estaVacia()) return alert("no hay nadie")
    cola.siguiente()
    setFila(cola.verTodos())
  }

  return (
    <div className={styles.pag}>
      <h2>Recepción</h2>
      <div className={styles.form}>
        <input placeholder="nombre" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input placeholder="piso" value={piso} onChange={(e) => setPiso(e.target.value)} />
        <input placeholder="tipo (Suite, Deluxe...)" value={cuarto} onChange={(e) => setCuarto(e.target.value)} />
        <input placeholder="# pieza" value={pieza} onChange={(e) => setPieza(e.target.value)} />
        <input placeholder="desde (dd/mm/aaaa)" value={desde} onChange={(e) => setDesde(e.target.value)} />
        <input placeholder="hasta (dd/mm/aaaa)" value={hasta} onChange={(e) => setHasta(e.target.value)} />
        <input placeholder="hora salida" value={salida} onChange={(e) => setSalida(e.target.value)} />
        <button onClick={meter}>Agregar</button>
        <button onClick={atender}>Atender</button>
      </div>
      {fila.length === 0 && <p>no hay nadie</p>}
      {fila.map((h, i) => (
        <div key={i} className={styles.item}>
          <div>
            <b>{i + 1}. {h.nombre}</b>
            <p>{h.cuarto} - Pieza {h.pieza} - {h.piso}</p>
            <span>{h.desde} → {h.hasta} | Sale: {h.salida}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CheckIn