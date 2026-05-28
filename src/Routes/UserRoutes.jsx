/*------------------------------------------------------------*/
//                    paginas sin login
/*------------------------------------------------------------*/

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Habitaciones from "../Pages/Habitaciones/Habitaciones"
import Lugares from "../Pages/Lugares/Lugares"
import Login from "../Pages/Login/Login"

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/habitaciones" element={<Habitaciones />} />
      <Route path="/lugares" element={<Lugares />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default UserRoutes
