/*------------------------------------------------------------*/
//                    lista libros
/*------------------------------------------------------------*/

function ListaLibros({ libros, sacar }) {
  if (libros.length === 0) {
    return <p className="vacio">no hay libros todavía</p>;
  }

  return (
    <div className="lista">
      {libros.map((libro, i) => (
        <div key={i} className="libro">
          <strong>{libro.nombre}</strong>
          <span>{libro.autor}</span>
          <small>{libro.editorial} - {libro.isbn}</small>
        </div>
      ))}
      <button onClick={sacar} className="btn-sacar">sacar último</button>
    </div>
  );
}

export default ListaLibros;
