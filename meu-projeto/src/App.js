import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Guilherme" 
        idade="26" 
        profissao="Programador" 
        foto="https://images5.alphacoders.com/132/thumb-1920-1323847.jpg"
      />
      <List />
    </div>
  )
}

export default App;
