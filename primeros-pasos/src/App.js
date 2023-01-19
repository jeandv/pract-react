import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {

  let datosUsuario = {
    pais: "Venezuela",
    nacionalidad: "Venezolano",
    estado: "Soltero",
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de react
        </p>
        <div className='componentes'>
          {/* cargar mi primer comentario */}
          <hr />
          <EventosComponentes />
          <hr />
          <MiComponente />
          <hr />
          <SegundoComponente />
          <hr />
          <TercerComponente
            nombre='Jean'
            apellidos='Rondon'
            datos={datosUsuario}
          />
        </div>
      </header>
    </div >
  );
}

export default App;
