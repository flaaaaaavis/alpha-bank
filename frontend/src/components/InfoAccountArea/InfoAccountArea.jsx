import React, {useContext} from 'react';
import { StyledDiv, StyledTable, StyledTitle, StyledTd }from "./styles.js";
import Saldo from "../Saldo/Saldo.jsx";
import { TransactionsContext } from '../../contexts/TransactionContext';
import CardAreaTransactionCard from '../CardAreaTransactionCard.jsx/CardAreaTransactionCard copy.jsx';
 
function InfoAccountArea() {
  const { transactions } = useContext(TransactionsContext)
  let lasttransactions = [];
  lasttransactions = transactions.filter((item, index) => index > (transactions.lenght - 4));
  return (
    <StyledDiv>
        <Saldo />
        {/* <StyledTitle text-align="center">Últimas Transações</StyledTitle>
        {
             lasttransactions.map((transaction, index) => <CardAreaTransactionCard key={index} description={transaction.description} value={transaction.value} />)
        } */}
        {/* <StyledTable> */}
        {/* <thead>
        <tbody>
          <tr>
            <td>{ description }</td>
            <td>{ date }</td>
            <StyledTd>R$ { value }</StyledTd>
          </tr>
          <tr>
            <td>{ description }</td>
            <td>{ date }</td>
            <StyledTd>R$ { value }</StyledTd>
          </tr>
          <tr>
            <td>{ description }</td>
            <td>{ date }</td>
            <StyledTd>R$ { value }</StyledTd>
          </tr>
          <tr>
            <td>{ description }</td>
            <td>{ date }</td>
            <StyledTd>R$ { value }</StyledTd>
          </tr>
          <tr>
            <td>{ description }</td>
            <td>{ date }</td>
            <StyledTd>R$ { value }</StyledTd>
          </tr>
        </tbody>
      </thead>
        </StyledTable> */}
    </StyledDiv>
  );
}

export default InfoAccountArea;