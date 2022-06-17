import React, {useState, useContext} from 'react';
import { StyledDepositFake } from './style'
import { AccountContext } from '../../contexts/AccountContext';
import { UserContext } from '../../contexts/UserContext';

function DepositFake() {

  const { number } = useContext(AccountContext);
  const { id } = useContext(UserContext)
  const [amount, setAmount] = useState('');

  async function handleDeposit(e) {
    e.preventDefault();

    const today = new Date();

    const data = `${today.getFullYear()}-${(today.getMonth)+1}-${today.getDate}`
    
    const options = {
      method: 'POST',
      body: {account_number: number, amount: amount, id: id, date: data},
    }

    fetch('http://localhost:4000/deposit', options)

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