/*------------------------------------------------------------*/
//                    grafo visual
/*------------------------------------------------------------*/

function GrafoVisual({ nodos, enlaces }) {
  return (
    <div className="grafo">
      <h3>nodos:</h3>
      {nodos.map((n, i) => (
        <span key={i} style={{ color: n.tipo === "ciudad" ? "red" : "blue", marginRight: 10 }}>
          {n.id}
        </span>
      ))}
      <h3>conexiones:</h3>
      {enlaces.map((e, i) => (
        <div key={i}>{e.source} → {e.target}</div>
      ))}
    </div>
  );
}

export default GrafoVisual;