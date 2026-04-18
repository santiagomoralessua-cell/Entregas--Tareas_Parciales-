/*------------------------------------------------------------*/
//                    form libro
/*------------------------------------------------------------*/

import { useState } from "react";

function FormLibro({ agregar }) {
  const [nombre, setNombre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [autor, setAutor] = useState("");
  const [editorial, setEditorial] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (!nombre) return alert("ponle nombre");

    agregar({ nombre, isbn, autor, editorial });
    setNombre("");
    setIsbn("");
    setAutor("");
    setEditorial("");
  };

  return (
    <form className="form" onSubmit={enviar}>
      <input placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input placeholder="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      <input placeholder="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
      <input placeholder="editorial" value={editorial} onChange={(e) => setEditorial(e.target.value)} />
      <button type="submit">agregar</button>
    </form>
  );
}

export default FormLibro;
