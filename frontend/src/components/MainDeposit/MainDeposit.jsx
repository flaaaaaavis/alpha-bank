import React from 'react';
import DepositButton from '../DepositButton/DepositButton.jsx';
import pix from '../../images/pix.png'
import boleto from '../../images/boleto.png'
import { StyledMainDeposit } from './MainDepoit.js';

// import { Container } from './styles';

function MainDeposit() {
  return (
    <StyledMainDeposit>
        <div className="container">
            <h1>Depositar por:</h1>
            <div className="flex">
                <DepositButton src={pix} alt='Metodo: Pix' label="PIX" />
                <DepositButton src={boleto} alt='Metodo: Boleto' label="Boleto" />
            </div>
        </div>
    </StyledMainDeposit>
  );
}

export default MainDeposit;