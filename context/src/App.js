import './App.css';
import { useEffect, useState } from 'react';
import { AppRouter } from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext';

export default function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log('useEffect una vez');
    //primera vez que se carga el component. USANDO LOS CORCHETES " [] "

    let usuarioLocal = JSON.parse(localStorage.getItem('usuario'));

    setUsuario(usuarioLocal);
  }, []);

  useEffect(() => {
    console.log('useEffect cargado por cambio del state usuario');
    //cada vez que se actualize el estado / state "usuario" se guarda en el Local Storage

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className="App">

      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}