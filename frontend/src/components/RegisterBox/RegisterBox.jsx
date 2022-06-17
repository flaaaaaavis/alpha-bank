import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle, SRecoverPageImg } from './RegisterBox.js'
import { RegisterForm, RegisterPassword, SendEmailCode, SetPassword, PasswordChanged } from '../RegistrationFlux/RegistrationFlux.jsx'
import frontImage from '../../images/front-image.png'
import recoverImage from '../../images/recover-img.png'
import logo from '../../images/logo.png'
import logoText from '../../images/AlphaBank.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



function RegisterBox() {
    return <SRegisterPage>
        <RegisterForm></RegisterForm>
        <SLogoText src={logoText} alt='smth3'></SLogoText>
        <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
        <SFrontPageImg src={frontImage} alt='smth'></SFrontPageImg>
    </SRegisterPage>
        ;
}

function RegisterBoxPassword() {

    return <SRegisterPage>
        <RegisterPassword></RegisterPassword>
        <SLogoText src={logoText} alt='smth3'></SLogoText>
        <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
        <SFrontPageImg src={frontImage} alt='smth'></SFrontPageImg>
    </SRegisterPage>
        ;

}

function RegisterCodeEmail() {

    return <SRegisterPage>
        <SendEmailCode></SendEmailCode>
        <SLogoText src={logoText} alt='smth3'></SLogoText>
        <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
        <SFrontPageImg src={frontImage} alt='smth'></SFrontPageImg>
    </SRegisterPage>
        ;
}

function ChangePassword() {


    return <SRegisterPage>
        <SetPassword></SetPassword>
        <SRecoverPageImg src={recoverImage} alt='smth'></SRecoverPageImg>
    </SRegisterPage>
        ;

}

function ModifiedPassword() {

    return <SRegisterPage>
        <PasswordChanged></PasswordChanged>
        <SRecoverPageImg src={recoverImage} alt='smth'></SRecoverPageImg>
    </SRegisterPage>
        ;


}


export { RegisterBox, RegisterBoxPassword, RegisterCodeEmail, ChangePassword, ModifiedPassword };