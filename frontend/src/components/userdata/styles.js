import Styled from 'styled-components';

export const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px;
    border-radius: 20px;
    background: #F5F5F5;
    border-radius: 20px;
    padding: 40px;
`;

export const StyledTitleContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const StyledTitle = Styled.h1`
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    display: flex;
    align-items: center;
    text-indent: 30px;
    color: #007366;
`;

export const StyledData = Styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledP = Styled.h3`
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    display: flex;
    align-items: center;
    text-indent: 30px;
    color: #7A7A7A;
`;

export const StyledButton = Styled.button`
    width: 50px;
    border: none;
    background-color: #f5f5f5;
`;