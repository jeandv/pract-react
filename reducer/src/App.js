import logo from './logo.svg';
import './App.css';
import { MisJuegos } from './components/MisJuegos';

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MisJuegos />
    </div>
  );
}