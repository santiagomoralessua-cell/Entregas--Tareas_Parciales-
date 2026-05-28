/*------------------------------------------------------------*/
//                    chat de ayuda 24 hrs 
/*------------------------------------------------------------*/

import { useState } from "react"
import useAuth from "../../Hooks/useAuth"
import useChat from "../../Hooks/useChat"
import styles from "./ChatFlotante.module.scss"

function ChatFlotante() {
    const { user } = useAuth()
    const { msgs, enviar } = useChat()
    const [abierto, setAbierto] = useState(false)
    const [txt, setTxt] = useState("")

    if (!user) return null

    const mandar = () => {
    if (!txt) return
    enviar(txt, user.email)
    setTxt("")
    }

    return (
    <div className={styles.flotante}>
        {abierto && (
        <div className={styles.caja}>
            <div className={styles.top}>
            <b>Chat</b>
            <span onClick={() => setAbierto(false)}>✕</span>
            </div>
            <div className={styles.msgs}>
            {msgs.length === 0 && <p>no hay mensajes</p>}
            {msgs.map((m, i) => (
                <p key={i}><b>{m.nombre}:</b> {m.texto}</p>
            ))}
            </div>
            <div className={styles.form}>
            <input placeholder="escribe..." value={txt} onChange={(e) => setTxt(e.target.value)} />
            <button onClick={mandar}>Enviar</button>
            </div>
        </div>
        )}
        <div className={styles.boton} onClick={() => setAbierto(!abierto)}>
        💬
        {msgs.length > 0 && <span className={styles.notif}>{msgs.length}</span>}
        </div>
    </div>
    )
}

export default ChatFlotante