import React from 'react';
import { StyledDiv, StyledTitleContainer, StyledTitle, StyledButton, StyledData, StyledP } from './styles.js'
import lapis from '../../images/lapis.png'

function UserData(props) {
    return(
        <StyledDiv>
            <StyledTitleContainer>
                <StyledTitle>Dados do Usuário:  </StyledTitle>,
                <StyledButton><img src={lapis} alt="editar" /></StyledButton>
            </StyledTitleContainer>
            <StyledData>
                <StyledP> Fulano de Carvalho {props.name} </StyledP>
                <StyledP> 123.456.789-00{props.CPF}</StyledP>
                <StyledP> 12/06/1900 {props.birth}</StyledP>
            </StyledData>
        </StyledDiv>
    );
}

export default UserData;