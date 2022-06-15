import {Link} from 'react-router-dom'

function Form3({ showData, setShowData }) {
    return <>
        <h3>Quanto irá transferir?</h3>
        <input type="number" defaultValue="0.00" min="0.00" step="0.01" />
        <Link to="/form4"><button>Continuar</button></Link>
    </>
}

export default Form3