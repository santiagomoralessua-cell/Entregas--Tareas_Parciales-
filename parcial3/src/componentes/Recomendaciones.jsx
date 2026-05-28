/*------------------------------------------------------------*/
/* canciones parecidas con el grafo */
/*------------------------------------------------------------*/
import { useState } from 'react'
import Grafo from '../estructuras/Grafo'

const grafo = new Grafo()

grafo.meter("cali pachanguero")
grafo.meter("mi gente")
grafo.meter("bonita")
grafo.meter("salsa pa la gente")
grafo.meter("baila morena")
grafo.meter("te quiero")
grafo.meter("trampa")
grafo.meter("bella cali")
grafo.meter("sin ti")
grafo.meter("muevelo")

grafo.unir("cali pachanguero", "salsa pa la gente")
grafo.unir("cali pachanguero", "baila morena")
grafo.unir("mi gente", "muevelo")
grafo.unir("mi gente", "bonita")
grafo.unir("bonita", "te quiero")
grafo.unir("te quiero", "sin ti")
grafo.unir("trampa", "bella cali")
grafo.unir("baila morena", "muevelo")
grafo.unir("salsa pa la gente", "mi gente")

function Recomendaciones() {
  const [cual, setCual] = useState('')
  const [sale, setSale] = useState([])

  const ver = (c) => {
    setCual(c)
    setSale(grafo.parecidas(c))
  }

  const nueva = () => {
    let a = prompt('primera cancion?')
    if (!a || !grafo.existe(a)) return alert('esa no esta parce')
    let b = prompt('con cual la conecto?')
    if (!b || !grafo.existe(b)) return alert('esa tampoco pillamos')
    grafo.unir(a, b)
    alert('ya quedaron pegadas')
    if (cual) setSale(grafo.parecidas(cual))
  }

  return (
    <div className="seccion">
      <h2>🔗 Canciones Parecidas</h2>
      <button onClick={nueva}>+ conexion</button>

      <div className="botones">
        {grafo.nodos.map((c, i) => (
          <button
            key={i}
            className={cual === c ? 'activo' : ''}
            onClick={() => ver(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {cual && (
        <div>
          <p>te gusta <b>{cual}</b>? dale a estas:</p>
          <div className="tarjetas">
            {sale.map((c, i) => (
              <div className="tarjeta" key={i}>🎵 {c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Recomendaciones