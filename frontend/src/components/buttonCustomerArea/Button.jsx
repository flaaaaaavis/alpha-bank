import React from 'react';
import { StyledButton } from './styles'

function Button(props) {
    return(
        <StyledButton onClick={props.onClick}>
            <img src={props.image} alt={props.title} width="80px" height="80px"/>
            <p>{props.title}</p>
        </StyledButton>
    )}

export default Button;