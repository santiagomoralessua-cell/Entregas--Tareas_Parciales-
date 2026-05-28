/*------------------------------------------------------------*/
//                    login
/*------------------------------------------------------------*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import styles from "./Login.module.scss"

function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [esLogin, setEsLogin] = useState(true)
  const [err, setErr] = useState("")
  const { entrar, registrar } = useAuth()
  const ir = useNavigate()

  const dale = async () => {
    if (!email || !pass) return setErr("llena todo")
    if (!email.includes("@")) return setErr("el email necesita @")
    if (!email.endsWith(".com")) return setErr("el email debe terminar en .com")
    if (pass.length < 6) return setErr("la contraseña debe tener minimo 6 caracteres")

    if (!esLogin) {
      if (!/[A-Z]/.test(pass)) return setErr("la contraseña necesita al menos una mayuscula")
      if (!/[0-9]/.test(pass)) return setErr("la contraseña necesita al menos un numero")
    }

    try {
      setErr("")
      esLogin ? await entrar(email, pass) : await registrar(email, pass)
      ir("/dashboard")
    } catch (e) {
      setErr("mal los datos")
    }
  }

  return (
    <div className={styles.pag}>
      <h2>{esLogin ? "Entrar" : "Registrarse"}</h2>
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
      {err && <p className={styles.error}>{err}</p>}
      <button onClick={dale}>{esLogin ? "Entrar" : "Crear cuenta"}</button>
      <p className={styles.cambiar} onClick={() => { setEsLogin(!esLogin); setErr("") }}>
        {esLogin ? "No tengo cuenta" : "Ya tengo cuenta"}
      </p>
    </div>
  )
}

export default Login