/*------------------------------------------------------------*/
//                    paginas con login
/*------------------------------------------------------------*/

import { Routes, Route } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import Dashboard from "../Pages/Dashboard/Dashboard"
import CheckIn from "../Pages/CheckIn/CheckIn"
import Historial from "../Pages/Historial/Historial"
import Buscar from "../Pages/Buscar/Buscar"
import Chat from "../Pages/Chat/Chat"

function AdminRoutes() {
  const { user, cargando } = useAuth()

  if (cargando) return <p>cargando...</p>
  if (!user) return null

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkin" element={<CheckIn />} />
      <Route path="/historial" element={<Historial />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default AdminRoutes
