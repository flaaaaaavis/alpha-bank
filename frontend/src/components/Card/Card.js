import Styled from 'styled-components';

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style> 

export const StyledCard = Styled.div`
    background-color: black;
    color: white;
    width: 630px;
    height: 350px;
    font-family: 'Oxygen', sans-serif;
    border-radius: 30px;
        header {
            width:100%;            
            display: flex;
            align-items: center;
            column-gap:50px;
            padding:20px 30px 15px;
        }
        header img {
            width: 100px;
        }
        header h1, span {
            display: inline;
            width: 114px;
            font-size: 70px;
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
            font-weight: 500;
            font-size: 30px;
        }
        .flex section div {
            margin-top: 30px;
            width: 70%;
            display: flex;
            justify-content: space-around;
        }
        .flex section div span {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            transform: translate(35px, -20px);
            
        }        
        .flex aside {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-bottom: 65px;
        }
        .flex aside img {            
            width: 110px;
        }
`