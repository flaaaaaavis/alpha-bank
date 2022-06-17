import React from 'react';
import { StyledDepositButton } from './DepositButton';
import { useNavigate } from 'react-router-dom';

function DepositButton(props) {
  let navigate = useNavigate()
  return (
    <StyledDepositButton onClick={() => {navigate('/deposit/amount')}}>
        <img src={props.src} alt={props.alt} />
        <p>{props.label}</p>
    </StyledDepositButton>
  );
}

export default DepositButton;