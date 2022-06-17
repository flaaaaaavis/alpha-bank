import styled from 'styled-components';
// import LoginBox from './LoginBox';

export const SLoginPage = styled.section`
    width: 100%;
    height: 1000px;
    background-color: #D2DCDB;
`
export const SLoginFormTitle = styled.h1`
    display: flex;
    background: none;
    width: 342px;
    height: 44px;
    font-size: 30px;
    font-family: Oxygen, sans-serif;
    color: #007366;
    align-items: center;
    justify-content: center;
`
export const SForm = styled.form`
    width: 350px;
    height: 70px;
    border-color: purple;
    border-radius: 4px;
`
export const LoginFormDiv = styled.div`
    display: flex;
    width: 400px;
    height: 450px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    margin-left: 1300px;
    margin-top: 200px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px gray;
`
export const SInput = styled.input`
    display: flex;
    width: 300px;
    height: 40px;
    border-color: #007366;
    border-width: 1px;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: white;
`
export const SLoginBtn = styled.button`
    display: flex;
    width: 328px;
    height: 47px;
    background-color: #007366;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    margin-top: 30px;
`
export const SFrontPageImg = styled.img`
    display: absolute;
    position: absolute;
    width: 906px;
    height: 621px;
    left: 330px;
`
export const SFrontPageLogo = styled.img`
    display: absolute;
    position: absolute;
    width: 176px;
    height: 217px;
    top: 40px;
    left: 80px;
`
export const SLogoText = styled.img`
    display: absolute;
    position: absolute;
    z-index: 1;
    top: 80px;
    left: 325px;
`
export const SBelowBtnTxt = styled.h1`
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 100;
`