import React, {useContext} from 'react';
import { StyledValue, StyledSaldo, StyledDiv, StyledEye, StyledShowSaldo } from './styles'
import eye from '../../images/olho.png'
import { AccountContext } from '../../contexts/AccountContext';

function Saldo(props) {
    const { balance } = useContext(AccountContext)
    return(
        <StyledDiv>
            <StyledSaldo>Saldo em Conta: </StyledSaldo>,
            <StyledShowSaldo>
                <StyledValue>{ balance }</StyledValue>
                <StyledEye><img src={ eye } alt="esconder senha" /></StyledEye>
            </StyledShowSaldo>
        </StyledDiv>
    )}

export default Saldo;