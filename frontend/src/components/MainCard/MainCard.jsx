import React from 'react';
import Card from '../Card/Card.jsx'
import TransactionsBox from '../TransactionsBox/TransactionsBox.jsx';
import { StyledMainCard } from './MainCard';

function MainCard() {
  return (
    <StyledMainCard>
        <div className="container">
            <Card />
            <TransactionsBox />
        </div>
    </StyledMainCard>
  );
}

export default MainCard;