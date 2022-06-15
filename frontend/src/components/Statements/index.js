import Styled from 'styled-components'

// ------------------------STYLES--------------------------------

export const StyledMain = Styled.main`
    width: 100vw;
    min-height: 88vh;

    background: #D2DCDB;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerTop = Styled.div`
    width: 80%;
    height: 10%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledBalance = Styled.div`
    width: 60%;
    height: 8vh;
    padding: 0 20px;
    border-radius: 10px;

    background: #FFFFFF;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledBalanceRight = Styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StyledAccountBalanceTitle = Styled.h2``

export const StyledAccountBalance = Styled.h2``

export const StyledEyeButton = Styled.img`
    width: 10%;

    cursor: pointer;
`

export const StyledStatementsFilter = Styled.select`
    width: 15%;
    height: 8vh;
    padding: 0 10px;
    border-radius: 10px;

    background: #FFFFFF;
`

export const StyledFilterOption = Styled.option``

export const StyledStatementsTable = Styled.table`
    width: 80%;
    height: 70%;
    padding: 20px;
    border-radius: 10px;

    background: #FFFFFF;
`

export const StyledTableHead = Styled.thead``

export const StyledTableBody = Styled.tbody``

export const StyledStatementRow = Styled.tr`
    td:nth-child(1){

    }
    td:nth-child(2){
        
    }
    td:nth-child(3){
        
    }
`

export async function allStatements() {
    // send request to backend via fetch and manage response
    const data = await fetch('http://localhost:5000/allStatements', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    data.map(statement => {
        let tr = document.createElement('tr');

        let description = document.createElement('td');
        description.innerText = statement.receiver_account;

        let date = document.createElement('td');
        data.innerText = statement.data;

        let value = document.createElement('td');
        value.innerText = statement.value;

        tr.append(description);
        tr.append(date);
        tr.append(value);

        document.querySelector('tbody').appendChild(tr);
        return true;
    }) 
}