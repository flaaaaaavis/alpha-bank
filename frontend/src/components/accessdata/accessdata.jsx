import React from 'react';
import { StyledDiv, StyledTitleContainer, StyledTitle, StyledButton, StyledData, StyledEmail, StyledPassword } from './styles.js'
import lapis from '../../images/lapis.png'
import ButtonDelete from "../../components/buttonDeleteUser/Button.jsx";

function AccessData(props) {
    return(
        <div>
            <StyledDiv>
                <StyledTitleContainer>
                    <StyledTitle>Dados de Acesso:  </StyledTitle>,
                    <StyledButton><img src={lapis} alt="editar" /></StyledButton>
                </StyledTitleContainer>
                <StyledData>
                    <StyledEmail> email@email.com {props.email}</StyledEmail>
                    <StyledPassword> ********** {props.password}</StyledPassword>
                </StyledData>
            </StyledDiv>
            <ButtonDelete />
        </div>
    );
}

export default AccessData;