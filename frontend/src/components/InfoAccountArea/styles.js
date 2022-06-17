import Styled from 'styled-components';

export const StyledDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #F5F5F5;
    margin: 100px;
    border-radius: 20px;
    padding: 40px;
`;

export const StyledTable = Styled.table`
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-left: 0.8em;
`;

export const StyledTitle = Styled.h1`
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    text-align: center;
`;

export const StyledTd = Styled.td`
    width: 300px;
    text-align: right;
`