import Styled from 'styled-components'


// ------------------------------------STYLES---------------------------------------------
export const StyledMain = Styled.main`
    width: 100vw;
    min-height: 80vh;

    background: #CBCBCB;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    background: #FFFFFF;
`

export const StyledAccountBalanceTitle = Styled.h2``

export const StyledAccountBalance = Styled.h2``

export const StyledEyeButton = Styled.img``

export const StyledStatementsFilter = Styled.select`
    background: #FFFFFF;
`

export const StyledFilterOption = Styled.option``

export const StyledStatementsTable = Styled.table`
    width: 80%;
    min-height: 80%;
    padding: 30px;

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

// ----------------------------------FUNCTIONS------------------------------------------
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