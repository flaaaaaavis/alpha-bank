import {Link} from 'react-router-dom'
import Image from '../../../images/transactionDone.png'

function Form4() {
    return <>
        <img src={Image} alt="" />
        <h3>Transferência concluída</h3>
        <button><Link to="/">Voltar para conta</Link></button>
    </>
}

export default Form4