import {Link} from 'react-router-dom'

function Form1() {
    return <>
        <h3>Para quem esta transferindo?</h3>
        <input type="text" length="11" placeholder='CPF' />
        <input type="text" placeholder='Código da Conta' />
        <button><Link to="/form2">Continuar</Link></button>
    </>
}

export default Form1