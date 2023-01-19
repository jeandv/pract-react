import logo from './logo.svg';
import './App.css';
import { MiComponent } from './components/MiComponent';
import { PruebasCustom } from './components/PruebasCustom';
import { MiFormulario } from './components/MiFormulario';
import { MiUsuario } from './components/MiUsuario';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponent />
        <PruebasCustom />
        <MiFormulario />
        <MiUsuario />
      </header>
    </div >
  );
}