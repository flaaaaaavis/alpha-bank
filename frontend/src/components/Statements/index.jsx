import React, { useState } from 'react';

import { StyledMain, ContainerTop, StyledBalance, StyledAccountBalanceTitle, StyledAccountBalance, StyledBalanceRight, StyledEyeButton, StyledStatementsTable, StyledTableHead, StyledTableBody } from './index'
/* StyledStatementsFilter, StyledFilterOption*/

import eyeButton from '../../images/eyeButton.png'
import closedEyeButton from '../../images/closedEyeButton.png'

function Statements() {
    const [open, setOpen] = useState(eyeButton)
    function changeImage() {
        if( open === eyeButton ) {
            setOpen(closedEyeButton)
        } else {
            setOpen(eyeButton)
        }
    }
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

                <StyledTableBody>{}</StyledTableBody>
            </StyledStatementsTable>

        </StyledMain>
    )
}

export default Statements