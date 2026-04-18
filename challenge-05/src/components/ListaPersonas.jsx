/*------------------------------------------------------------*/
//                    lista personas
/*------------------------------------------------------------*/

function ListaPersonas({ personas, atender }) {
  if (personas.length === 0) {
    return <p className="vacio">no hay nadie</p>;
  }

  return (
    <div className="lista">
      {personas.map((p, i) => (
        <div key={i} className="persona">
          <strong>{p.nombre}</strong>
          <span>{p.monto}</span>
        </div>
      ))}
      <button onClick={atender} className="btn">atender</button>
    </div>
  );
}

export default ListaPersonas;
