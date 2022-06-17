import React from 'react';
import { SForm, SInput, SLoginBtn, SLoginPage, LoginFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SLoginFormTitle, SBelowBtnTxt } from './LoginBox.js'
import { RegisterPassword, SendEmailCode, SetPassword, PasswordChanged } from '../RegistrationFlux/RegistrationFlux.jsx'
import loginImage from '../../images/login-img.png'
import logo from '../../images/logo.png'
import logoText from '../../images/AlphaBank.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function LoginBox() {

    let navigate = useNavigate()

    return (
        <SLoginPage>
            <SForm>
                <LoginFormDiv>
                    <SLoginFormTitle>Entrar</SLoginFormTitle>
                    <SInput type='text' placeholder='CPF' />
                    <SInput type='text' placeholder='Senha' />
                    <SLoginBtn onClick={() => {
                        navigate('/customerarea')
                    }}> Continuar 
                    </SLoginBtn>
                    <SBelowBtnTxt> Esqueci Minha Senha </SBelowBtnTxt>
                    <button onClick={() => {
                        navigate('/registration')
                    }}>
                        <SBelowBtnTxt> Ainda Não Sou Cliente </SBelowBtnTxt>
                    </button>
                </LoginFormDiv>
            </SForm>
            <SLogoText src={logoText} alt='smth3'></SLogoText>
            <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
            <SFrontPageImg src={loginImage} alt='smth'></SFrontPageImg>
        </SLoginPage>
    )
}

export default LoginBox;


