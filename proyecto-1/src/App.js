import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>
      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="#content">Peliculas</a></li>
          <li><a href="#share">Blog</a></li>
          <li><a href="https://jeandv.github.io/jeandv-portfolio/#contact">Contacto</a></li>
        </ul>
      </nav>
      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Listado de peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState} />

      </section>
      {/* Barra lateral | Buscador y crear */}
      <aside className="lateral">

        <Buscador listadoState={listadoState} setListadoState={setListadoState} />

        <Crear setListadoState={setListadoState} />

      </aside>
      {/* Pie de página */}
      <footer className="footer">
        <div className="share" id="share">
          <a href="https://www.instagram.com/jnxrn" className="fab fa-instagram"></a>
          <a href="https://twitter.com/r4yb4" className="fab fa-twitter"></a>
          <a href="https://github.com/jeandv" className="fab fa-github"></a>
          <a href="https://www.linkedin.com/in/jeandv" className="fab fa-linkedin"></a>
        </div>
        <p>&copy; Jean Rondón | <a href="https://jeandv.github.io/jeandv-portfolio/">mi portafolio :)</a></p>
      </footer>
    </div>
  );
}

export default App;
