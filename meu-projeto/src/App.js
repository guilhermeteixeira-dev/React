import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Guilherme" />
      <Pessoa 
        nome="Guilherme" 
        idade="26" 
        profissao="Programador" 
        foto="" 
      />
    </div>
  )
}

export default App;
