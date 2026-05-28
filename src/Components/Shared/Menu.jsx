/*------------------------------------------------------------*/
//                    menu
/*------------------------------------------------------------*/

import { Link } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import styles from "./Menu.module.scss"

function Menu() {
  const { user, salir } = useAuth()

  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.logo}>HOTEL EL DORADO</Link>
      <div className={styles.links}>
        <Link to="/habitaciones">Habitaciones</Link>
        <Link to="/lugares">Lugares</Link>
        {!user && <Link to="/login">Entrar</Link>}
        {user && (
          <>
            <Link to="/dashboard">Panel</Link>
            <Link to="/checkin">Recepción</Link>
            <Link to="/historial">Historial</Link>
            <Link to="/buscar">Buscar</Link>
            <span onClick={salir} className={styles.salir}>Salir</span>
          </>
        )}
      </div>
    </nav>
  )
}

export default Menu