import React from 'react';
import { StyledButton } from './styles'

function Button(props) {
    return(
        <StyledButton onClick={props.onClick}>
            <img src={props.image} alt={props.title} width="100px"/>
            <p>{props.title}</p>
        </StyledButton>
    )}

export default Button;