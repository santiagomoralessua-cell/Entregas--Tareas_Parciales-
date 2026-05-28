/*------------------------------------------------------------*/
/* buscador con el trie */
/*------------------------------------------------------------*/
import { useState } from 'react'
import Trie from '../estructuras/Trie'

const trie = new Trie()

const base = [
  "cali pachanguero", "calma", "como te atreves",
  "bonita", "baila morena", "bella cali",
  "salsa pa la gente", "sin ti", "solo por ti",
  "mi gente", "muevelo", "mala mia",
  "te quiero", "trampa", "tu y yo"
]
base.forEach(c => trie.meter(c))

function Buscador() {
  const [txt, setTxt] = useState('')
  const [lista, setLista] = useState([])
  const [aviso, setAviso] = useState('')

  const cambiar = (e) => {
    let v = e.target.value
    setTxt(v)
    if (v) {
      setLista(trie.autocompletar(v))
      setAviso('')
    } else {
      setLista([])
      setAviso('')
    }
  }

  const revisar = () => {
    if (!txt) return alert('ey escribi algo')
    if (trie.existe(txt.toLowerCase())) {
      setAviso('✅ esa cancion si esta parce')
    } else {
      setAviso('❌ no pillo esa cancion')
    }
  }

  const elegir = (c) => {
    setTxt(c)
    setLista([])
    setAviso('✅ le diste a: ' + c)
  }

  const nueva = () => {
    let nom = prompt('que cancion vas a meter?')
    if (!nom) return alert('ponele nombre pues')
    trie.meter(nom)
    alert('ya quedo: ' + nom)
  }

  return (
    <div className="seccion">
      <h2>🗺️ Buscador</h2>
      <div className="barra">
        <input
          type="text"
          placeholder="busca cancion..."
          value={txt}
          onChange={cambiar}
        />
        <button onClick={revisar}>buscar</button>
        <button onClick={nueva}>+ cancion</button>
      </div>

      {aviso && <p className="aviso">{aviso}</p>}

      {lista.length > 0 && (
        <div className="tarjetas">
          {lista.map((c, i) => (
            <div className="tarjeta" key={i} onClick={() => elegir(c)}>
              🎵 {c}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Buscador