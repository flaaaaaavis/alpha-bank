import React from 'react';
import { StyledDepositButton } from './DepositButton';

function DepositButton(props) {
  return (
    <StyledDepositButton>
        <img src={props.src} alt={props.alt} />
        <p>{props.label}</p>
    </StyledDepositButton>
  );
}

export default DepositButton;