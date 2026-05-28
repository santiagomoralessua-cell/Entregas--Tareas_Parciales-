/*------------------------------------------------------------*/
//                    login
/*------------------------------------------------------------*/

import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u)
      setCargando(false)
    })
  }, [])

  const entrar = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
  }

  const registrar = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  const salir = () => {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, cargando, entrar, registrar, salir }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
