import {Link} from 'react-router-dom'

function form3() {
    return <>
        <h3>Quanto irá transferir?</h3>
        <input type="number" min="0.00" step="0.01" placeholder='R$' />
        <button><Link to="/form4">Concluir</Link></button>
    </>
}

export default form3