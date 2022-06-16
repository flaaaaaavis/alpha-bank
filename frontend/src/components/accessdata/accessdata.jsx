import React,  { useContext } from 'react';
import { StyledDiv, Container, StyledTitleContainer, StyledTitle, StyledButton, StyledData, StyledEmail, StyledPassword, StyledButtonDelete } from './styles.js'
import lapis from '../../images/lapis.png'
import { UserContext } from '../../contexts/UserContext';

function AccessData(props) {
    const { email } = useContext(UserContext)
    return(
        <Container>
            <StyledDiv>
                <StyledTitleContainer>
                    <StyledTitle>Dados de Acesso:  </StyledTitle>,
                    <StyledButton><img src={lapis} alt="editar" /></StyledButton>
                </StyledTitleContainer>
                <StyledData>
                    <StyledEmail> email@email.com { email }</StyledEmail>
                    <StyledPassword> ********** {props.password}</StyledPassword>
                </StyledData>
            </StyledDiv>
            <StyledButtonDelete onClick={props.onClick}> Deletar Conta </StyledButtonDelete>
        </Container>
    );
}

export default AccessData;