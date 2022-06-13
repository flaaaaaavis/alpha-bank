import React from 'react';
import { StyledValue, StyledSaldo, StyledDiv, StyledEye, StyledShowSaldo } from './styles'
import eye from '../../images/olho.png'

function Saldo(props) {
    return(
        <StyledDiv>
            <StyledSaldo>Saldo em Conta: </StyledSaldo>,
            <StyledShowSaldo>
                <StyledValue>R$ {props.value}</StyledValue>
                <StyledEye><img src={ eye } alt="esconder senha" /></StyledEye>
            </StyledShowSaldo>
        </StyledDiv>
    )}

export default Saldo;