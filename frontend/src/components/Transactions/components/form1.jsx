import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Form1({ showData, setShowData }) {
    const [cpf, setCPF] = useState('');
    const [account, setAccount] = useState('');

    async function getData() {
        console.log('Teste')
        const cpf = document.getElementById('cpf').value
        const account = document.getElementById('account').value


        if (cpf && account) {
            await fetch('http://localhost:5000/findReceiver', {
                method: 'POST',
                body: {
                    method: 'cpf',
                    cpf: cpf,
                    number: account
                }
            }).then(response => {
                response.json()
            }).then(  
                data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.account.number
                })
                console.log(cpf)
                return ('/form2')
            }).catch(
                (e) => {
                    console.log(e)
                }
            )

        } else if (cpf!== '' && account === '') {
            console.log('digitou cpf')
            await fetch('http://localhost:5000/findReceiver', {
                method: 'POST',
                body: {
                    method: 'cpf',
                    cpf: cpf
                }
            }).then(response => { 
                console.log(response)
            }).then(data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.user.number
                })
                return ('/form2')
            })
        } else if (account!== '' && cpf === '' ) {
            console.log('digitou conta')
            await fetch('http://localhost:5000/findReceiver', {
                method: 'POST',
                body: {
                    method: 'accountCode',
                    account: account
                }
            }).then(response => {
                response.json()
            }).then(data => {
                setShowData({
                    "name": data.user.name,
                    "account": data.account.number
                })
                return ('/form2')
            })
        } else {
            console.log('digitou nada')
            return ('/formError')
        }
    }

    return <>
        <h3>Para quem está transferindo?</h3>
        <input value={cpf} onInput={(e) => {setCPF(e.target.value); console.log(cpf)}} type="text" length="11" placeholder='CPF' />
        <p>ou</p>
        <input value={account} onInput={(e) => { setAccount(e.target.value); console.log(account)}} type="text" placeholder='Código da Conta' />
        <Link to={'/form2'}><button onClick={getData}>Continuar</button></Link>
    </>
}
export default Form1