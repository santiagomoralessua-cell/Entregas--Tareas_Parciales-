/*------------------------------------------------------------*/
//                    app
/*------------------------------------------------------------*/

import { useState } from "react";
import Grafo from "./structures/Grafo";
import GrafoVisual from "./components/GrafoVisual";
import "./styles/main.scss";

const grafo = new Grafo();

grafo.agregarCiudad("Cali");
grafo.agregarCiudad("Palmira");
grafo.agregarPersona("Juan", 25);
grafo.agregarPersona("Ana", 22);
grafo.agregarPersona("Luis", 30);
grafo.conectar("Juan", "Cali");
grafo.conectar("Ana", "Cali");
grafo.conectar("Luis", "Palmira");

function App() {
  const [ciudad, setCiudad] = useState("");
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudadNueva, setCiudadNueva] = useState("");
  const [, setActualizar] = useState(0);

  const buscar = () => {
    if (!ciudad) return;
    setPersonas(grafo.personasDeCiudad(ciudad));
  };

  const agregar = (e) => {
    e.preventDefault();
    if (!nombre || !edad || !ciudadNueva) return alert("llena todo");
    grafo.agregarPersona(nombre, edad);
    grafo.conectar(nombre, ciudadNueva);
    setNombre("");
    setEdad("");
    setCiudadNueva("");
    setActualizar((n) => n + 1);
  };

  return (
    <div className="app">
      <h1>Grafo "Amigos y Ciudades"</h1>

      <form className="form" onSubmit={agregar}>
        <input placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        <input placeholder="ciudad" value={ciudadNueva} onChange={(e) => setCiudadNueva(e.target.value)} />
        <button type="submit">agregar</button>
      </form>

      <div className="buscar">
        <input placeholder="buscar ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        <button onClick={buscar}>buscar</button>
      </div>

      {personas.length > 0 && (
  <div className="lista">
    <p><strong>{personas.length}</strong> personas en {ciudad}:</p>
    {personas.map((p, i) => <div key={i}>{p.id} - {p.edad} años</div>)}
  </div>
)}

      <GrafoVisual nodos={grafo.nodos} enlaces={grafo.enlaces} />
    </div>
  );
}

export default App;