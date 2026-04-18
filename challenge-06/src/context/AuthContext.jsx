/*------------------------------------------------------------*/
//                    auth
/*------------------------------------------------------------*/

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = (email, pass) => {
    if (email === "user@mail.com" && pass === "123") {
      setUsuario(email);
      return true;
    }
    return false;
  };

  const logout = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
