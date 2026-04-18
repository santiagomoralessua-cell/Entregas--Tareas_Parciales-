/*------------------------------------------------------------*/
//                    login
/*------------------------------------------------------------*/

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    if (login(email, pass)) return navigate("/");
    alert("mal los datos");
  };

  return (
    <div className="login">
      <h2>login</h2>
      <form onSubmit={enviar}>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit">entrar</button>
      </form>
    </div>
  );
}

export default Login;
