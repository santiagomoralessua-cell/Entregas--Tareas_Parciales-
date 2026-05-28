/*------------------------------------------------------------*/
//                    ventana informativa
/*------------------------------------------------------------*/

import { useState } from "react"
import styles from "./Popup.module.scss"

function Popup() {
    const [ver, setVer] = useState(true)

    if (!ver) return null

    return (
    <div className={styles.fondo} onClick={() => setVer(false)}>
        <div className={styles.caja} onClick={(e) => e.stopPropagation()}>
        <span className={styles.cerrar} onClick={() => setVer(false)}>✕</span>
        <h2>HOTEL EL DORADO</h2>
        <p className={styles.sub}>Cali - Colombia</p>
        <h3>Información importante</h3>
        <p>Para su seguridad, no realice ningún pago fuera de canales oficiales.</p>
        <div className={styles.link}>www.hoteldorado.com</div>
        <p className={styles.chiquito}>Verifique siempre los medios de pago directamente en la página web oficial o comuníquese con nosotros para confirmar cualquier información antes de realizar tu pago.</p>
        </div>
    </div>
    )
}

export default Popup