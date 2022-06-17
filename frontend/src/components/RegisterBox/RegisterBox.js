import styled from 'styled-components';
import RegisterBox from './RegisterBox';

export const SRegisterPage = styled.div`
width: 100%;
height: 1000px;
background-color: #D2DCDB;

`
export const SRegisterFormTitle = styled.h1`
display: flex;
background: none;
width: 342px;
height: 44px;
font-size: 30px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: #007366;
align-items: center;
justify-content: center;

`

export const SPasswordChangedText = styled.h1`
display: flex;
position: absolute;
background: none;
width: 342px;
height: 44px;
font-size: 30px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: #007366;
top: 525px;
right: 100px;
`

export const SForm = styled.form`
width: 350px;
height: 70px;
border-color: purple;
border-radius: 4px;

`
export const RegisterFormDiv = styled.div`
display: flex;
width: 400px;
height: 450px;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 10px;
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
export const SRegisterBtn = styled.button`
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
export const SRecoverPageImg = styled.img`
display: absolute;
position: absolute;
width: 925px;
height: 925px;
z-index: 1;
top: 20px;
left: 225px;
`

