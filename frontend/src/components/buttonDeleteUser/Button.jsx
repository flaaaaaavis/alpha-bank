import React from 'react';
import { StyledButton } from './styles'

function ButtonDelete(props) {
    return(
        <StyledButton onClick={props.onClick}>
            <p> Deletar Conta </p>
        </StyledButton>
    )}

export default ButtonDelete;