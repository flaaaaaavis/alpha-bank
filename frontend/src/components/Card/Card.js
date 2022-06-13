import Styled from 'styled-components';

export const StyledCard = Styled.div`
    background-color: black;
    color: white;
    width: 630px;
    height: 350px;
    border-radius: 30px;
        header {
            width:100%;
            height: 230px;
            display: flex;
            align-items: center;
            column-gap:50px;
            padding: 50px;
        }
        header h1, span {
            display: inline;
            font-size: 48px;
            font-family: 'Oxygen', sans-serif;
            font-weight: 400;
        }
        header span {
            color: #007366;
        }
        
        .flex {
            width: 100%;
            height: 270px;
            display: flex;            
        }
        .flex section {
            width: 80%;
            padding: 20px;
        }
        .flex section p {
            font-family: 'Oxygen', sans-serif;
            font-weight: 500;
            font-size: 48px;
        }
        .flex section div {
            margin-top: 30px;
            width: 70%;
            display: flex;
            justify-content: space-around;
        }
        .flex section div span {
            font-family: 'Oxygen', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            transform: translate(35px, -20px);
            
        }        
        .flex aside {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-bottom: 30px;
        }
        .flex aside img {
            width: 146px;
            height: 90px;
        }
`