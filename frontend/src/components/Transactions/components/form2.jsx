import {Link} from 'react-router-dom'

function Form2() {
    return <>
        <h3>Confirme os dados</h3>
        <p>Nome: <span>{}</span></p>
        <p>Conta: <span>{}</span></p>
        <Link to="/form3"><button>Continuar</button></Link>
    </>
}

export default Form2