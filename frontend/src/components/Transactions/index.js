import Styled from 'styled-components';

export const StyledMain = Styled.main`

`

export const StyledTransactionForm = Styled.form`
    width: 30%;
    max-width: 500px;
    height: 80%;
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3 {
        font-family: Oxygen;
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: center;
        color: #007366;
    }
    input {
        width: 80%;
        max-width: 340px;
        height: 59px;
        padding-left: 20px;
        border-bottom: 2px solid #007366;
    }
    button {
        width: 426px;
        max-width: 85%;
        height: 59px;
        background: #007366;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
    }
`

export const StyledTransactionsPanel = Styled.div`
    width: 60%;
    max-width: 1126px; 
    height: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: 
    h2 {
        width: 642px;
        height: 99px;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 61px;
        text-align: left;
        color: #7A7A7A;
    }
`

export const StyledTransactionsTable = Styled.table``

export const StyledTransactionsTableHead = Styled.thead``

export const StyledTransactionsTableBody = Styled.tbody``