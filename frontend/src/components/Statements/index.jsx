import React from 'react';

import { StyledMain, ContainerTop, StyledBalance, StyledAccountBalanceTitle, StyledAccountBalance, StyledEyeButton, StyledStatementsFilter, StyledFilterOption, StyledStatementsTable, StyledTableHead, StyledTableBody, StyledStatementRow } from './index'

import eyeButton from '../../images/eyeButton'

function Statements() {
    return (
        <StyledMain>

            <ContainerTop>
                <StyledBalance>
                    <StyledAccountBalanceTitle>Saldo em conta</StyledAccountBalanceTitle>
                {/* Agrupar da direita */}
                    <StyledAccountBalance>{}</StyledAccountBalance>
                    <StyledEyeButton src={eyeButton} />
                </StyledBalance>
                <StyledStatementsFilter>
                    <StyledFilterOption default>Filtrar por:</StyledFilterOption>
                    <StyledFilterOption></StyledFilterOption>
                    <StyledFilterOption></StyledFilterOption>
                </StyledStatementsFilter>
            </ContainerTop>

            <StyledStatementsTable>
                <StyledTableHead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data e Hora</th>
                        <th>Valor</th>
                    </tr>
                </StyledTableHead>

                <StyledTableBody>{}</StyledTableBody>
            </StyledStatementsTable>

        </StyledMain>
    )
}

export default Statements