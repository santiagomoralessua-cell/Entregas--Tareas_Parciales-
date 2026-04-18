/*------------------------------------------------------------*/
//                    ruta privada
/*------------------------------------------------------------*/

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaPrivada({ children }) {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" />;
  return children;
}

export default RutaPrivada;
