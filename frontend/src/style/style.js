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
        font-family: 'Oxygen', sans-serif;
        vertical-align: center;

        box-sizing: border-box;
    }

    body {
        max-width: 100vw;
        min-height: 100vh;
    }
`; 