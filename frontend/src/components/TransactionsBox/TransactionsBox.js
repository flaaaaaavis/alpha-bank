import styled from 'styled-components';

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style> 

export const StyledTransactionsBox = styled.div`
    height: 568px;
    width: 551px;
    background: #F5F5F5;
    padding: 20px;
    border-radius: 20px;
        p {
            font-family: 'Oxygen', sans-serif;
            font-size: 30px;
            color: #7A7A7A;
            padding-left: 20px;
            position: absolute;                        
        }
        div {
            width: 511px;
            height: 528px;
            background: #ffffff;
            border-radius: 20px;
            padding-top: 32px;
            overflow-y: scroll;
        }
`;
