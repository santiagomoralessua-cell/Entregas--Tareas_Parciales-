/*------------------------------------------------------------*/
//                    funciones
/*------------------------------------------------------------*/

const fechaBonita = (ts) => {
  return new Date(ts).toLocaleDateString("es-CO")
}

const plata = (n) => {
  return "$" + n.toLocaleString("es-CO")
}

export { fechaBonita, plata }
