import React from 'react';

import { StyledMain, StyledTransactionForm, StyledTransactionsPanel } from './index'

function Transactions() {
    return (
        <StyledMain>
            <StyledTransactionForm>
                <h3>{}</h3>
                <button>{}</button>
            </StyledTransactionForm>
            <StyledTransactionsPanel>
                <h2>Histórico de transferências</h2>
                <StyledTransactionsTable>
                    <StyledTransactionsTableHead>
                        <tr>
                            <th>Descrição</th>
                            <th>Data e Hora</th>
                            <th>Valor</th>
                        </tr>
                    </StyledTransactionsTableHead>
                    <StyledTransactionsTableBody>{}</StyledTransactionsTableBody>
                </StyledTransactionsTable>
            </StyledTransactionsPanel>
        </StyledMain>
    )
}

export default Transactions