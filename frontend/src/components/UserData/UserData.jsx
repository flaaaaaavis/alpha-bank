import React, {useContext}  from 'react';
import { StyledDiv, StyledTitleContainer, StyledTitle, StyledButton, StyledData, StyledP } from './styles.js'
import lapis from '../../images/lapis.png'
import { UserContext } from '../../contexts/UserContext';

function UserData() {
    const { name, cpf, bDate } = useContext(UserContext)
    return(
        <StyledDiv>
            <StyledTitleContainer>
                <StyledTitle>Dados do Usuário:  </StyledTitle>,
                <StyledButton><img src={lapis} alt="editar" /></StyledButton>
            </StyledTitleContainer>
            <StyledData>
                <StyledP> { name } </StyledP>
                <StyledP> { cpf }</StyledP>
                <StyledP> { bDate }</StyledP>
            </StyledData>
        </StyledDiv>
    );
}

export default UserData;