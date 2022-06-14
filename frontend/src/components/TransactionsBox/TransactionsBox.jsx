import React, {useContext} from 'react';
import { StyledTransactionsBox } from './TransactionsBox.js'
import CardAreaTransactionCard from '../CardAreaTransactionCard.jsx/CardAreaTransactionCard copy.jsx';
import { TransactionsContext } from '../../contexts/TransactionContext';

function TransactionsBox() {

  const { transactions } = useContext(TransactionsContext);

  return (
    <StyledTransactionsBox>
        <p>Últimas Transações</p>
        <div>
          {
            transactions.map(transaction => <CardAreaTransactionCard description={transaction.description} value={transaction.value} />)
          }
        </div>
    </StyledTransactionsBox>
  );
}

export default TransactionsBox;