import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Form1({showData, handleData}) {    
    const [cpf, setCPF] = useState('');
    const [account, setAccount] = useState('');

    async function getData() {
        console.log(showData);
        handleData({
            "path": "/form2"
        });
        console.log(showData);

        // if (cpf && account) {
        //     await fetch('http://localhost:5000/findReceiver', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: {
        //             method: 'cpf',
        //             value: cpf
        //         }
        //     }).then(response => {
        //         console.log(response.rows[0])
        //         return response.rows[0]
        //     }).then(  
        //         data => {
        //         setShowData({
        //             "name": data.user.users.name,
        //             "account": data.user.number,
        //             "path": "/form2"
        //         })
        //     }).catch(
        //         (e) => {
        //             console.log(e)
        //         }
        //     )

        // } else if (cpf && !account) {
        //     console.log('digitou cpf')
        //     try {
        //         await fetch('http://localhost:5000/findReceiver', {
        //             method: 'POST',
        //             mode: 'no-cors',
        //             headers: {
        //                 'Content-Type': 'application/json; charset=utf-8',
        //                 // 'Access-Control-Allow-Origin': 'http://localhost:3000/'
        //             },
        //             body: {
        //                 value: cpf,
        //                 method: 'cpf'
        //             }
        //         }).then(
        //             data => {
        //                 console.log(showData)
        //                 setShowData({
        //                     "name": data.user.name,
        //                     "account": data.user.number,
        //                     "path": "/form2"
        //                 })
        //                 console.log(showData)
        //         })
        //     } catch (error) {
        //         console.log(error)
        //         setShowData({
        //             "name": "",
        //             "account": "",
        //             "path": "/formError"
        //         })
        //     }
            
        // } else if (account && !cpf) {
        //     console.log('digitou conta')
        //     await fetch('http://localhost:5000/findReceiver', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         body: {
        //             method: 'accountCode',
        //             value: account
        //         }
        //     }).then(response => {
        //         response.json()
        //     }).then(data => {
        //         setShowData({
        //             "name": data.user.name,
        //             "account": data.account.number,
        //             "path": "/form2"
        //         })
        //     })
        // } else {
        //     console.log('digitou nada')
        //     setShowData({
        //         "name": '',
        //         "account": '',
        //         "path": "/formError"
        //     })
        //     console.log(showData)
        // }
    }

    return <>
        <h3>Para quem está transferindo?</h3>
        <input value={cpf} onInput={(e) => setCPF(e.target.value)} type="text" length="11" placeholder='CPF' />
        <p>ou</p>
        <input value={account} onInput={(e) => setAccount(e.target.value)} type="text" placeholder='Código da Conta' />
        <Link onClick={getData} to={showData.path}><button>Continuar</button></Link>
    </>
}
export default Form1