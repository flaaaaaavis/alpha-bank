import {Link} from 'react-router-dom'

function Form1() {
    return <>
        <h3>Para quem está transferindo?</h3>
        <input type="text" length="11" placeholder='CPF' />
        <p>ou</p>
        <input type="text" placeholder='Código da Conta' />
        <Link to="/form2"><button>Continuar</button></Link>
    </>
}

export default Form1