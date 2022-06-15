import styled from 'styled-components';

export const StyledDepositFake = styled.div`
width: 100%;
height: calc(100vh - 224px);
background-color: #D2DCDB;
    .container {
        width: 1150px;
        height: calc(100vh - 224px);
        padding: 40px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container form {
        width: 1300px;
        height: 50px;
        display: flex;
        align-items: center;
        column-gap: 5px;
    }
    .container form label {
        font-size: 30px;
        font-family: 'Oxygen', sans-serif;
    }
    .container form input {
        width: 500px;
        padding-left: 10px;
        font-size: 30px;
        font-family: 'Oxygen', sans-serif;
        background-color: #D2DCDB;
        border: 1px solid black;
        border-radius: 8px;
    }
    .container form button {
        font-size: 30px;
        font-family: 'Oxygen', sans-serif;
        margin-left: 60px;
        padding: 0 10px;
        border: 1px solid black;
        border-radius: 8px;
    }
`;