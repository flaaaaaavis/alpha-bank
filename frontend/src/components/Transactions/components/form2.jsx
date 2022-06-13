import {Link} from 'react-router-dom'

function form2() {
    return <>
        <h3>Confirme os dados</h3>
        <p>Nome: <span>{}</span></p>
        <p>Conta: <span>{}</span></p>
        <button><Link to="/form3">Continuar</Link></button>
    </>
}

export default form2