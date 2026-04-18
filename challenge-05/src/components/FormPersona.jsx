/*------------------------------------------------------------*/
//                    form persona
/*------------------------------------------------------------*/

import { useState } from "react";

function FormPersona({ agregar }) {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (!nombre) return alert("ponle nombre");

    agregar({ nombre, monto });
    setNombre("");
    setMonto("");
  };

  return (
    <form className="form" onSubmit={enviar}>
      <input placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input placeholder="monto" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <button type="submit">agregar</button>
    </form>
  );
}

export default FormPersona;
