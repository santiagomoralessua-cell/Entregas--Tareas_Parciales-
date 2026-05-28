/*------------------------------------------------------------*/
//                    app
/*------------------------------------------------------------*/

import React from "react"
import ReactDOM from "react-dom/client"
import AppRoutes from "./Routes/AppRoutes"
import "./global.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppRoutes />
)