import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Form1({showData, handleData}) {
    const [cpf, setCPF] = useState('');
    const [account, setAccount] = useState('');
    const [uuid, setUuid] = useState('')

    let navigate = useNavigate();

    async function getData() {
        if (cpf && account) {
            try {
                await fetch('http://localhost:4000/findReceiver', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        method: 'cpf',
                        value: cpf
                    }
                }).then((response) => response.json()
                ).then((data) => {
                    console.log(data)
                    // console.log(showData)
                    handleData({
                        "name": data.name,
                        "account": data.number,
                    })
                    navigate('/form2')
                    // console.log(showData))
                })
            } catch(error) {
                console.log(error)
                handleData({
                    "name": "",
                    "account": ""
                })
                navigate('/formError')
            }

        } else if (cpf && !account) {
            console.log('digitou cpf')
            try {
                await fetch('http://localhost:4000/findReceiver', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        value: cpf,
                        method: 'cpf'
                    })
                }).then((response) => response.json()
                ).then((data) => {
                    // console.log(data)
                    // console.log(showData)
                    handleData({
                        "name": data.name,
                        "account": data.number
                    })
                    navigate('/form2')
                    // console.log(showData))
                })
            } catch(error) {
                console.log(error)
                handleData({
                    "name": "",
                    "account": ""
                })
                navigate('/formError')
            }
            
        } else if (account && !cpf) {
            console.log('digitou conta')
            try {
                await fetch('http://localhost:4000/findReceiver', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        method: 'accountCode',
                        value: cpf
                    }
                }).then((response) => response.json()
                ).then((data) => {
                    console.log(data)
                    // console.log(showData)
                    handleData({
                        "name": data.name,
                        "account": data.number
                    })
                    navigate('/form2')
                    // console.log(showData))
                })
            } catch(error) {
                console.log(error)
                handleData({
                    "name": "",
                    "account": ""
                })
                navigate('/formError')
            }

        } else if (cpf && !account) {
            console.log('digitou cpf')
            try {
                await fetch('http://localhost:4000/findReceiver', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        value: cpf,
                        method: 'cpf'
                    })
                }).then((response) => response.json()
                ).then((data) => {
                    console.log(data)
                    // console.log(showData)
                    handleData({
                        "name": data.name,
                        "account": data.number
                    })
                    navigate('/form2')
                    // console.log(showData))
                })
            } catch(error) {
                console.log(error)
                handleData({
                    "name": "",
                    "account": ""
                })
                navigate('/formError')
            }
        } else {
            console.log('digitou nada')
            handleData({
                "name": '',
                "account": ''
            })
            navigate('/formError')
            console.log(showData)
        }
    }

    return <>
        <h3>Para quem está transferindo?</h3>
        <input value={cpf} onInput={(e) => setCPF(e.target.value)} type="text" length="11" placeholder='CPF' />
        <p>ou</p>
        <input value={account} onInput={(e) => setAccount(e.target.value)} type="text" placeholder='Código da Conta' />
        <Link onClick={getData} to='#'><button>Continuar</button></Link>
    </>
}
export default Form1