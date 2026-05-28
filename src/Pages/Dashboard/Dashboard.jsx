/*------------------------------------------------------------*/
//                    panel
/*------------------------------------------------------------*/

import { Link } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import styles from "./Dashboard.module.scss"

function Dashboard() {
  const { user } = useAuth()

  return (
    <div className={styles.pag}>
      <h2>Bienvenido</h2>
      <p>{user?.email}</p>
      <div className={styles.opciones}>
        <Link to="/checkin">Recepción</Link>
        <Link to="/historial">Historial</Link>
        <Link to="/buscar">Buscar</Link>
      </div>
    </div>
  )
}

export default Dashboard