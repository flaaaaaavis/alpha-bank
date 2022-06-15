import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle, SPasswordChangedText } from '../RegisterBox/RegisterBox.js'
import changedPasswordImg from '../../images/changed-password.png'

function RegisterPassword() {
    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Dados de Acesso</SRegisterFormTitle>
            <SInput type='text' placeholder='Senha'></SInput>
            <SInput type='text' placeholder='Confirme Sua Senha'></SInput>
            <br />
            <SRegisterBtn>Continuar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

function SendEmailCode() {
    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Código Enviado!</SRegisterFormTitle>
            <SInput type='text' placeholder='Código Enviado'></SInput>
            <br />
            <SRegisterBtn>Prosseguir</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>

}

function SetPassword() {
    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Altere Sua Senha</SRegisterFormTitle>
            <SInput type='text' placeholder='Nova Senha'></SInput>
            <SInput type='text' placeholder='Confirme a Nova Senha'></SInput>
            <br />
            <SRegisterBtn>Alterar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

function PasswordChanged() {
    return <SForm>
        <RegisterFormDiv>
            <img src={changedPasswordImg}></img>
            <SPasswordChangedText>Senha Alterada!</SPasswordChangedText>
            <br />
            <SRegisterBtn>Retornar ao Login</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>

}

export { RegisterPassword, SendEmailCode, SetPassword, PasswordChanged }