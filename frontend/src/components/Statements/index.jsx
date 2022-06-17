import React, { useState, useContext } from 'react';

import { StyledMain, ContainerTop, StyledBalance, StyledAccountBalanceTitle, StyledAccountBalance, StyledBalanceRight, StyledEyeButton, StyledStatementsTable, StyledTableHead, StyledTableBody } from './index'
/* StyledStatementsFilter, StyledFilterOption*/

import eyeButton from '../../images/eyeButton.png'
import closedEyeButton from '../../images/closedEyeButton.png'

import { TransactionsContext } from '../../contexts/TransactionContext'

function Statements() {
    const [open, setOpen] = useState(eyeButton)
    function changeImage() {
        if( open === eyeButton ) {
            setOpen(closedEyeButton)
        } else {
            setOpen(eyeButton)
        }
    }

    const { transactions } = useContext(TransactionsContext);

    let mapReverse1 = transactions.slice(0)
    mapReverse1 = mapReverse1.reverse()
    mapReverse1 = mapReverse1.map(element => {
        return element;
    });

    return (
        <StyledMain>

            <ContainerTop>
                <StyledBalance>
                    <StyledAccountBalanceTitle>Saldo em conta</StyledAccountBalanceTitle>
                    <StyledBalanceRight>
                        <StyledAccountBalance><span>R$ </span>{}</StyledAccountBalance>
                        <StyledEyeButton onClick={changeImage} id="eye-button" src={open} />
                    </StyledBalanceRight>
                </StyledBalance>
                {/* <StyledStatementsFilter>
                    <StyledFilterOption default>Filtrar por:</StyledFilterOption>
                    <StyledFilterOption></StyledFilterOption>
                    <StyledFilterOption></StyledFilterOption>
                </StyledStatementsFilter> */}
            </ContainerTop>

            <StyledStatementsTable>
                <StyledTableHead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data e Hora</th>
                        <th>Valor</th>
                    </tr>
                </StyledTableHead>

                <StyledTableBody>
                    {
                        mapReverse1.map(transaction => {
                            const receiver = transaction.receiver_account;
                            const date = transaction.date;
                            const value = transaction.value;
                            return (
                                <tr>
                                    <td>{receiver}</td>
                                    <td>{date}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })
                    }
                </StyledTableBody>
            </StyledStatementsTable>

        </StyledMain>
    )
}

export default Statements