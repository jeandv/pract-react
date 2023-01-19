import logo from './logo.svg';
import './App.css';
import { EjemploComponent } from './components/EjemploComponent';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <EjemploComponent />
    </div>
  );
}

export default App;
