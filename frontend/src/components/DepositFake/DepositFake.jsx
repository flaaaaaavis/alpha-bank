import React, {useState, useContext} from 'react';
import { StyledDepositFake } from './style'
import { AccountContext } from '../../contexts/AccountContext';

function DepositFake() {

  const { number } = useContext(AccountContext)
  const [amount, setAmount] = useState('');

  async function handleDeposit() {
    
    const options = {
      method: 'POST',
      body: {account_number: number, amount: amount},
    }

    fetch('http://localhost/deposit', options)

  }

  return (
    <StyledDepositFake>
        <div className="container">
            <form>
                <label htmlFor='amount'>Valor (R$) do deposito: </label>
                <input type="text" name="amount" value={amount} onInput={event=> setAmount(event.target.value)} id="amount" placeholder='Insira valor do deposito...' />
                <button>Depositar</button>
            </form>
        </div>
    </StyledDepositFake>
  );
}

export default DepositFake;