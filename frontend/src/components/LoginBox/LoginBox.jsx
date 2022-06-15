import React from 'react';
import { SForm, SInput, SLoginBtn, SLoginPage, LoginFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SLoginFormTitle, SBelowBtnTxt } from './LoginBox.js'
import { RegisterPassword, SendEmailCode, SetPassword, PasswordChanged } from '../RegistrationFlux/RegistrationFlux.jsx'
import loginImage from '../../images/login-img.png'
import logo from '../../images/logo.png'
import logoText from '../../images/AlphaBank.png'


function LoginBox() {
    return <SLoginPage>
    <SForm>
        <LoginFormDiv>
            <SLoginFormTitle>Entrar</SLoginFormTitle>
        <SInput type='text' placeholder='CPF'></SInput>
        <SInput type='text' placeholder='Senha'></SInput>
        <SLoginBtn>Continuar</SLoginBtn>
        <SBelowBtnTxt>Esqueci Minha Senha > </SBelowBtnTxt>
        <SBelowBtnTxt>Ainda Não Sou Cliente > </SBelowBtnTxt>
        </LoginFormDiv>
    </SForm>
    <SLogoText src={logoText} alt='smth3'></SLogoText>
    <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
    <SFrontPageImg src={loginImage} alt='smth'></SFrontPageImg>
    </SLoginPage>
    ;
}

export default LoginBox;


