import {createGlobalStyle} from 'styled-components'

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style> 

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: 0;
        font-size: 16px;
        text-decoration: none;
        border: none;
        outline: none;
        background-color: #CBCBCB;

        box-sizing: border-box;
    }
`; 