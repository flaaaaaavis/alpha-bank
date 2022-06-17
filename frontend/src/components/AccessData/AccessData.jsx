import React,  { useContext } from 'react';
import { StyledDiv, Container, StyledTitleContainer, StyledTitle, StyledButton, StyledData, StyledEmail, StyledPassword, StyledButtonDelete } from './styles.js'
import lapis from '../../images/lapis.png'
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom'

function AccessData(props) {
    const { email } = useContext(UserContext)
    let navigate = useNavigate()
    return(
        <Container>
            <StyledDiv>
                <StyledTitleContainer>
                    <StyledTitle>Dados de Acesso:  </StyledTitle>,
                    <StyledButton><img src={lapis} alt="editar" /></StyledButton>
                </StyledTitleContainer>
                <StyledData>
                    <StyledEmail> { email }</StyledEmail>
                </StyledData>
            </StyledDiv>
                    <StyledButtonDelete
                    onClick={() => {
                        navigate('/deleteUser')
                      }}
                    > Deletar Conta </StyledButtonDelete>
        </Container>
    );
}

export default AccessData;