/*------------------------------------------------------------*/
//                    app
/*------------------------------------------------------------*/

import { useState, useEffect } from "react";
import Cola from "./structures/Cola";
import FormPersona from "./components/FormPersona";
import ListaPersonas from "./components/ListaPersonas";
import "./styles/main.scss";

const cola = new Cola();

function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    cola.agregar({ nombre: "Juan", monto: "50000" });
    cola.agregar({ nombre: "Ana", monto: "120000" });
    cola.agregar({ nombre: "Luis", monto: "30000" });
    setPersonas(cola.verTodos());
  }, []);

  const agregar = (p) => {
    cola.agregar(p);
    setPersonas(cola.verTodos());
  };

  const atender = () => {
    cola.atender();
    setPersonas(cola.verTodos());
  };

  return (
    <div className="app">
      <h1>cola cajero</h1>
      <FormPersona agregar={agregar} />
      <ListaPersonas personas={personas} atender={atender} />
    </div>
  );
}

export default App;
