import Styled from 'styled-components';

export const Main = Styled.main`
    width: 100vw;
    min-height: 88%;

    background: #D2DCDB;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const Form = Styled.div`
    width: 30vw;
    height: 70vh;
    border-radius: 20px;

    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3 {
        font-family: Oxygen;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: 0em;
        text-align: center;
        color: #007366;
    }
    div {
        width: 100%;
    }
    h4 {
        font-family: Oxygen;
        font-size: 1em;
        font-weight: 600;
        letter-spacing: 0em;
        text-align: center;
        color: #007366;
    }
    input {
        width: 80%;
        max-width: 340px;
        height: 10%;
        padding-left: 20px;
        border-bottom: 1px solid #7A7A7A;
    }
    input:hover {
        border-bottom: 2px solid #007366;
        ::placeholder {
            color: #007366;
        }
    }
    .label {
        margin-left: 15%;
        text-decoration: bold;
        align-self: flex-start;
    }
    a {
        width: 80%;
        height: 10%;
        button {
            width: 100%;
            height: 100%;
            background: #007366;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 0em;
            text-align: center;
            color: #FFFFFF;
        }
    }
    img {
        height: 50%;
    }
    
`

export const Panel = Styled.div`
    width: 60%;
    height: 80%;
    border-radius: 20px;
    padding: 30px;

    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    h2 {
        margin-bottom: 3%;
        font-style: normal;
        font-weight: 700;
        font-size: 2em;
        text-align: left;
        color: #7A7A7A;
    }
`

export const Table = Styled.table`
    width: 90%;
    height: 80%;
    align-self: center;


    font-size: 1em;
    line-height: 1.5em;

    tr { display : table-row}
    thead { display : table-header-group }
    td, th { display :  table-cell }

    tbody:before {
        content: '';
        display: block;
        height: 10px;
    }
`

export const TableHead = Styled.thead`
    display: block;
    th {
        font-size: 1.2em;
    }
`

export const TableBody = Styled.tbody`
    height: 80%;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
    td {
        text-align: center;
    }
`