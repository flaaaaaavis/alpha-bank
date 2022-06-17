import {Link} from 'react-router-dom'

function Form2({ showData, handleData }) {
    return <>
        <h3>Confirme os dados</h3>
        <div>
            <p className='label'>Nome:</p>
            <h4>{showData.name}</h4>
        </div>
        <div>
            <p className='label'>Conta:</p>
            <h4>{showData.account}</h4>
        </div>
        <Link to="/form3"><button>Continuar</button></Link>
    </>
}

export default Form2