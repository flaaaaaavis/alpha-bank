import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle } from './RegisterBox.js'
import frontImage from '../../images/front-image.png'
import logo from '../../images/logo.png'
import logoText from '../../images/AlphaBank.png'

function RegisterBox() {
    return <SRegisterPage>
    <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Faça Sua Conta</SRegisterFormTitle>
        <SInput type='text' placeholder='Nome Completo'></SInput>
        <SInput type='text' placeholder='CPF'></SInput>
        <SInput type='text' placeholder='E-mail'></SInput>
        <SInput type='text' placeholder='Data de Nascimento'></SInput>
        <SRegisterBtn>Continuar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
    <SLogoText src={logoText} alt='smth3'></SLogoText>
    <SFrontPageLogo src={logo} alt="smth2"></SFrontPageLogo>
    <SFrontPageImg src={frontImage} alt='smth'></SFrontPageImg>
    </SRegisterPage>
    ;

}

export default RegisterBox;