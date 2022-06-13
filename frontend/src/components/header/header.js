import Styled from 'styled-components';

export const StyledHeader = Styled.div`
    height: 224px;
    width: 100%;
    background-color: #F6F6F6;
    
    display:flex;
    align-items: center;
    justify-content: center;
`

export const FlexContainer = Styled.div`
    height: 140px;
    width: 1300px;
    display:flex;
    justify-content: space-between;
`

export const StyledLogoBox = Styled.div`
    width: 114px;
    height: 140px;
`
export const StyledUserInfo = Styled.div`
    width: 1000px;
    height: 140px;
    font-family: 'Oxygen', sans-serif;
        h1 {
            margin: 0 0 12px;
            width: 642px;
            height: 99px;            
            font-size: 64px;
            color: #007366;
        }
        p {            
            font-size: 32px;
            color: #7A7A7A;
            margin: 0;
        }
`