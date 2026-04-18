/*------------------------------------------------------------*/
//                    app
/*------------------------------------------------------------*/

import { useState, useEffect } from "react";
import Pila from "./structures/Pila";
import FormLibro from "./components/FormLibro";
import ListaLibros from "./components/ListaLibros";
import "./styles/main.scss";

const pila = new Pila();

function App() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    pila.meter({ nombre: "Cien Años de Soledad", isbn: "123", autor: "Gabo", editorial: "Sudamericana" });
    pila.meter({ nombre: "El Principito", isbn: "456", autor: "Saint-Exupéry", editorial: "Reynal" });
    pila.meter({ nombre: "Don Quijote", isbn: "789", autor: "Cervantes", editorial: "Francisco de Robles" });
    setLibros(pila.verTodos());
  }, []);

  const agregar = (libro) => {
    pila.meter(libro);
    setLibros(pila.verTodos());
  };

  const sacar = () => {
    pila.sacar();
    setLibros(pila.verTodos());
  };

  return (
    <div className="app">
      <h1>pila de libros</h1>
      <FormLibro agregar={agregar} />
      <ListaLibros libros={libros} sacar={sacar} />
    </div>
  );
}

export default App;
