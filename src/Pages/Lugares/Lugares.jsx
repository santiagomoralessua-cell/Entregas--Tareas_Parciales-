/*------------------------------------------------------------*/
//                    lugares
/*------------------------------------------------------------*/

import Grafo from "../../structures/Grafo"
import styles from "./Lugares.module.scss"

const grafo = new Grafo()
grafo.meterSitio("Cristo Rey")
grafo.meterSitio("San Antonio")
grafo.meterSitio("Zoológico")
grafo.meterSitio("Río Pance")
grafo.meterSitio("La Tertulia")
grafo.meterSitio("Gato de Tejada")
grafo.conectar("Cristo Rey", "San Antonio")
grafo.conectar("San Antonio", "Gato de Tejada")
grafo.conectar("San Antonio", "La Tertulia")
grafo.conectar("La Tertulia", "Río Pance")
grafo.conectar("Zoológico", "Río Pance")
grafo.conectar("Cristo Rey", "Zoológico")

function Lugares() {
  return (
    <div className={styles.pag}>
      <h2>Lugares cerca del hotel</h2>
      <div className={styles.lugares}>
        {grafo.sitios.map((s, i) => (
          <div key={i} className={styles.lugar}>
            <b>{s}</b>
            <span>conecta con</span>
            <p>{grafo.vecinos(s).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lugares