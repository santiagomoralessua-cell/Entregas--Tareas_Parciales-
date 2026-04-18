/*------------------------------------------------------------*/
//                    cajero
/*------------------------------------------------------------*/

import { useState, useEffect } from "react";
import Cola from "../structures/Cola";

const cola = new Cola();

function Cajero() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    cola.agregar({ nombre: "Juan", monto: "50000" });
    cola.agregar({ nombre: "Ana", monto: "30000" });
    setPersonas(cola.verTodos());
  }, []);

  const agregar = () => {
    const nombre = prompt("nombre");
    if (!nombre) return;
    cola.agregar({ nombre, monto: "10000" });
    setPersonas(cola.verTodos());
  };

  const atender = () => {
    cola.atender();
    setPersonas(cola.verTodos());
  };

  return (
    <div className="pagina">
      <h2>cola cajero</h2>
      <button onClick={agregar}>agregar</button>
      <button onClick={atender}>atender</button>
      <div className="lista">
        {personas.map((p, i) => (
          <div key={i} className="item">{p.nombre} - {p.monto}</div>
        ))}
      </div>
    </div>
  );
}

export default Cajero;
