import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Image from '../../../images/dataNotFound.png'

function FormError({ showData, handleData }) {
    async function getData() {
        handleData({
            "name": "",
            "account": "",
            "path": "/"
        })
    }
    return <>
        <img src={Image} alt="" />
        <h3>Ops!!<br />Tente novamente</h3>
        <Link onClick={getData} to={showData.path}><button>Retornar</button></Link>
    </>
}

export default FormError