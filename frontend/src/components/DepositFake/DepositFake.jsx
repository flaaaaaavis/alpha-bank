import React from 'react';
import { StyledDepositFake } from './style'

function DepositFake() {
  return (
    <StyledDepositFake>
        <div className="container">
            <form>
                <label htmlFor='amount'>Valor (R$) do deposito: </label>
                <input type="text" name="amount" id="amount" placeholder='Insira valor do deposito...' />
                <button>Depositar</button>
            </form>
        </div>
    </StyledDepositFake>
  );
}

export default DepositFake;