import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { AccountContext } from '../../../contexts/AccountContext';
import { TransactionsContext } from '../../../contexts/TransactionContext';

function Form3({ showData, handleData }) {
    const [value, setValue] = useState('');
    const {number} = useContext(AccountContext);
    const { collectAccount } = useContext(AccountContext);
    const { collectTransactions } = useContext(TransactionsContext);

    let navigate = useNavigate();

    async function getValue() {
        
        // console.log(showData)
        handleData({
            "value": value
        })
        // console.log(showData)

        try {
            await fetch('http://localhost:4000//transaction', {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    "amount": showData.value,
                    "sender_account": number,
                    "receiver_account": showData.account
                })
            }).then((response) => {
                if(response.status === 200) {
                    collectAccount();
                    collectTransactions();
                    navigate('/form4')
                }
            })
        } catch (error) {
            console.log(error)
            navigate('/formError')
        }
    }
    return <>
        <h3>{number}Quanto irá transferir?</h3>
        <input value={value} onInput={(e) => setValue(e.target.value)} type="number" min="0.00" step="0.01" />
        <Link onClick={getValue} to="#"><button>Continuar</button></Link>
    </>
}

export default Form3