/*------------------------------------------------------------*/
//                    chat
/*------------------------------------------------------------*/

import { createContext, useState, useEffect } from "react"
import { rtdb } from "../firebase/config"
import { ref, push, onValue } from "firebase/database"

const ChatContext = createContext()

function ChatProvider({ children }) {
  const [msgs, setMsgs] = useState([])

  useEffect(() => {
    onValue(ref(rtdb, "chat"), (snap) => {
      if (!snap.exists()) return setMsgs([])
      let d = snap.val()
      setMsgs(Object.keys(d).map((k) => ({ id: k, ...d[k] })))
    })
  }, [])

  const enviar = (txt, quien) => {
    push(ref(rtdb, "chat"), { texto: txt, nombre: quien, fecha: Date.now() })
  }

  return (
    <ChatContext.Provider value={{ msgs, enviar }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }
