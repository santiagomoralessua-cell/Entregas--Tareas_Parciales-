/*------------------------------------------------------------*/
//                    libros
/*------------------------------------------------------------*/

import { useState, useEffect } from "react";
import Pila from "../structures/Pila";

const pila = new Pila();

function Libros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    pila.meter({ nombre: "Cien Años de Soledad", autor: "Gabo" });
    pila.meter({ nombre: "El Principito", autor: "Saint-Exupéry" });
    setLibros(pila.verTodos());
  }, []);

  const agregar = () => {
    const nombre = prompt("nombre del libro");
    if (!nombre) return;
    pila.meter({ nombre, autor: "yo" });
    setLibros(pila.verTodos());
  };

  const sacar = () => {
    pila.sacar();
    setLibros(pila.verTodos());
  };

  return (
    <div className="pagina">
      <h2>pila de libros</h2>
      <button onClick={agregar}>agregar</button>
      <button onClick={sacar}>sacar</button>
      <div className="lista">
        {libros.map((l, i) => (
          <div key={i} className="item">{l.nombre} - {l.autor}</div>
        ))}
      </div>
    </div>
  );
}

export default Libros;
