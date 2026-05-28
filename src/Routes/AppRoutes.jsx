/*------------------------------------------------------------*/
//                    rutas
/*------------------------------------------------------------*/

import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../Context/AuthContext"
import { ChatProvider } from "../Context/ChatContext"
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"
import Menu from "../Components/Shared/Menu"
import ChatFlotante from "../Components/Shared/ChatFlotante"
import Popup from "../Components/Shared/Popup"

function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChatProvider>
          <Popup />
          <Menu />
          <UserRoutes />
          <AdminRoutes />
          <ChatFlotante />
        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes