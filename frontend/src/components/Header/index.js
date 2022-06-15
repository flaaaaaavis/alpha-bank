import Styled from 'styled-components';

export const StyledHeader = Styled.div`
    height: 12vh;
    width: 100vw;
    padding-right: 2%;
    padding-left: 4%;
    
    background-color: #F6F6F6;
    
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledContainerLeft = Styled.div`
    width: 32%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledLogo = Styled.img`
    height: 80%;
`

export const StyledUserInfo = Styled.div`
    height: 80%;
    h1 {
        margin: 0 0 2%;         
        font-size: 2em;
        font-weight: 400;
        color: #007366;
    }
    p, span {            
        font-size: 1em;
        color: #7A7A7A;
        margin: 0;
    }
`

export const StyledExitButton = Styled.img`
    height: 40%;
`