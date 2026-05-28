/*------------------------------------------------------------*/
//                    chat
/*------------------------------------------------------------*/

import { useState } from "react"
import useAuth from "../../Hooks/useAuth"
import useChat from "../../Hooks/useChat"
import styles from "./Chat.module.scss"

function Chat() {
  const { user } = useAuth()
  const { msgs, enviar } = useChat()
  const [txt, setTxt] = useState("")

  const mandar = () => {
    if (!txt) return
    enviar(txt, user.email)
    setTxt("")
  }

  return (
    <div className={styles.pag}>
      <h2>Chat</h2>
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
  )
}

export default Chat
