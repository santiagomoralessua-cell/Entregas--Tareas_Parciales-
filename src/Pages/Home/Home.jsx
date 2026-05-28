/*------------------------------------------------------------*/
//                    inicio
/*------------------------------------------------------------*/

import { Link } from "react-router-dom"
import styles from "./Home.module.scss"
import video from "../../assets/hotel.mp4"

function Home() {
  return (
    <div className={styles.home}>
      <video autoPlay muted loop className={styles.video}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.contenido}>
        <h1>Hotel El Dorado</h1>
        <p>Tu destino en el corazón de Cali</p>
        <Link to="/habitaciones" className={styles.btn}>Ver habitaciones</Link>
      </div>
    </div>
  )
}

export default Home