import React, {useState, useContext} from 'react';
import { StyledDepositFake } from './style'
import { AccountContext } from '../../contexts/AccountContext';
import { UserContext } from '../../contexts/UserContext';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { useNavigate } from 'react-router-dom'

function DepositFake() {

  const { collectTransactions } = useContext(TransactionsContext);
  const { collectAccount } = useContext(AccountContext);

  let navigate = useNavigate()

  const { number } = useContext(AccountContext);
  const { id } = useContext(UserContext)
  const [amount, setAmount] = useState('');

  async function handleDeposit(e) {
    e.preventDefault();    

    const newDeposit = {
      account_number: number,
      amount: amount,
      id: id
    }
    
    const options = {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(newDeposit),
      headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch('http://localhost:4000/deposit', options)
                           .then(data => data.json())
                           .then(res => {console.log(res); return res })
                           .catch(error => console.log(error))
    if (response.added) {

      collectAccount();
      collectTransactions();
      navigate('/customerpage')

    } else {
      console.log(response)
    }

  }

  return (
    <StyledDepositFake>
        <div className="container">
            <form>
                <label htmlFor='amount'>Valor (R$) do deposito: </label>
                <input type="text" name="amount" value={amount} onInput={event=> setAmount(event.target.value)} id="amount" placeholder='Insira valor do deposito...' />
                <button onClick={handleDeposit}>Depositar</button>
            </form>
        </div>
    </StyledDepositFake>
  );
}

export default DepositFake;