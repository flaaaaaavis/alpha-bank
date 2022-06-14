import React from 'react';
import { StyledTransactionsCard } from './CardAreaTransactionCard';

function CardAreaTransactionCard(props) {
  return (
    <>
        <StyledTransactionsCard>
            <span>{props.description}</span>
            <span className={(parseInt(props.value) >= 0)?"green":"red"}>R$ {props.value}</span>
        </StyledTransactionsCard>        
    </>
  );
}

export default CardAreaTransactionCard;