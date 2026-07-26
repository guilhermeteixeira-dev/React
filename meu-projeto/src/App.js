import './App.css';

function App() {
  const name = 'Guilherme';

  const newName = name.toUpperCase()

  function soma(a, b) {
    return a + b;
  }

  const url = 'https://images5.alphacoders.com/132/thumb-1920-1323847.jpg';

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p> soma: {soma(2, 2)}</p>
        <img src={url} width="33%" alt="Minha Imagem"/>
    </div>
  )
}

export default App;
