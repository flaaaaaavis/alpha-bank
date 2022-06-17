import {createGlobalStyle} from 'styled-components'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style> 

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: 0;
        font-size: inherit;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: 'Oxygen', sans-serif;
        vertical-align: center;
        background-color: transparent;

        box-sizing: border-box;
    }

    #root {
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button, a {
        cursor: pointer;
    }
`; 