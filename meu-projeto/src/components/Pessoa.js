import styles from './Frase.module.css';
function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} width="300px" alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;