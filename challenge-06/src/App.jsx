/*------------------------------------------------------------*/
//                    app
/*------------------------------------------------------------*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import RutaPrivada from "./components/RutaPrivada";
import Login from "./pages/Login";
import Libros from "./pages/Libros";
import Cajero from "./pages/Cajero";
import "./styles/main.scss";

function Nav() {
  const { usuario, logout } = useAuth();

  return (
    <nav className="nav">
      <Link to="/">libros</Link>
      <Link to="/cajero">cajero</Link>
      {usuario && <span>{usuario}</span>}
      {usuario && <button onClick={logout}>salir</button>}
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RutaPrivada><Libros /></RutaPrivada>} />
          <Route path="/cajero" element={<RutaPrivada><Cajero /></RutaPrivada>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
