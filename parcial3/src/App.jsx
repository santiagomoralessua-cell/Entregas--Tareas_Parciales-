/*------------------------------------------------------------*/
/* app - el panel de musica */
/*------------------------------------------------------------*/
import './App.scss'
import Buscador from './componentes/Buscador'
import Ranking from './componentes/Ranking'
import Recomendaciones from './componentes/Recomendaciones'

function App() {
  return (
    <div className="todo">
      <div className="header">
        <h1>🎵 Mi Spotify</h1>
        <p>plataforma de musica educativa</p>
      </div>
      <Buscador />
      <Ranking />
      <Recomendaciones />
    </div>
  )
}

export default App