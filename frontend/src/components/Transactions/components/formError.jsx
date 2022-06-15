import {Link} from 'react-router-dom'
import Image from '../../../images/dataNotFound.png'

function FormError() {
    async function getData({ showData, setShowData }) {
        setShowData({
            "name": "",
            "account": ""
        })
    }
    return <>
        <img src={Image} alt="" />
        <h3>Tente novamente</h3>
        <Link to={getData()}><button>Retornar</button></Link>
    </>
}

export default FormError