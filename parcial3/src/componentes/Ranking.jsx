/*------------------------------------------------------------*/
/* las mas sonadas con el heap */
/*------------------------------------------------------------*/
import { useState } from 'react'
import MaxHeap from '../estructuras/MaxHeap'

const heap = new MaxHeap()

heap.meter("cali pachanguero", 850)
heap.meter("mi gente", 1200)
heap.meter("bonita", 430)
heap.meter("salsa pa la gente", 670)
heap.meter("baila morena", 990)
heap.meter("te quiero", 310)
heap.meter("trampa", 540)
heap.meter("bella cali", 780)

function Ranking() {
  const [top, setTop] = useState(heap.topCanciones(5))

  const tope = top.length > 0 ? top[0].veces : 1

  const nueva = () => {
    let nom = prompt('cual cancion va?')
    if (!nom) return alert('ponele nombre ve')
    let v = prompt('cuantas veces la han puesto?')
    if (!v || isNaN(v)) return alert('eso q es parce, mete un numero')
    heap.meter(nom, Number(v))
    setTop(heap.topCanciones(5))
  }

  return (
    <div className="seccion">
      <h2>🏆 Top Canciones</h2>
      <button onClick={nueva}>+ cancion</button>

      <div className="lista-rank">
        {top.map((c, i) => (
          <div className="fila-rank" key={i}>
            <span className="puesto">#{i + 1}</span>
            <span className="nom">🎵 {c.nombre}</span>
            <div className="barra-plays">
              <div
                className="llena"
                style={{ width: (c.veces / tope * 100) + '%' }}
              ></div>
            </div>
            <span className="plays">{c.veces}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ranking