import React from 'react';
import Header from '../components/Header/Header.jsx';
import Card from '../components/Card/Card.jsx';
import TransactionsBox from '../components/TransactionsBox/TransactionsBox.jsx';

function CardArea() {
  return (
    <>
      <Header />
      <Card />
      <TransactionsBox />
    </>
  )
}

export default CardArea;