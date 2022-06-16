import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle } from './RegisterBox.js'
import { RegisterForm }  from '../RegistrationFlux/RegistrationFlux.jsx'
import frontImage from '../../images/front-image.png'
import logo from '../../images/logo.png'
import logoText from '../../images/AlphaBank.png'

function RegisterBox() {
    return <SRegisterPage>
    <RegisterForm></RegisterForm>
    <SLogoText src={logoText} alt='smth3'></SLogoText>
    <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
    <SFrontPageImg src={frontImage} alt='smth'></SFrontPageImg>
    </SRegisterPage>
    ;

}

export default RegisterBox;