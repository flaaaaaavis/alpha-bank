import {Link} from 'react-router-dom'
import Image from '../../../images/transactionDone.png'

function Form4() {
    return <>
        <img src={Image} alt="" />
        <h3>Transferência concluída</h3>
        <Link to="/transactions"><button>Voltar para conta</button></Link>
    </>
}

export default Form4