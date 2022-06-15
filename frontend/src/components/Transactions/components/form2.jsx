import {Link} from 'react-router-dom'

function Form2({ showData, setShowData }) {
    return <>
        <h3>Confirme os dados</h3>
        <p>Nome: <span>{showData.name}</span></p>
        <p>Conta: <span>{showData.account}</span></p>
        <Link to="/form3"><button>Continuar</button></Link>
    </>
}

export default Form2