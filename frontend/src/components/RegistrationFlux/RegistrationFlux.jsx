import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle, SPasswordChangedText } from '../RegisterBox/RegisterBox.js'
import changedPasswordImg from '../../images/changed-password.png'
import { useNavigate } from 'react-router-dom'


function RegisterPassword() {

    let navigate = useNavigate()

    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Dados de Acesso</SRegisterFormTitle>
            <SInput type='text' placeholder='Senha'></SInput>
            <SInput type='text' placeholder='Confirme Sua Senha'></SInput>
            <br />
            <SRegisterBtn onClick={() => {
                        navigate('/registrationemailcode')
            }}> Continuar
            </SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

function SendEmailCode() {

    let navigate = useNavigate()
    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Usuário Criado!</SRegisterFormTitle>
            <br />
            <SRegisterBtn onClick={() => {
                        navigate('/')
            }}>Prosseguir</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>

}

function SetPassword() {

    let navigate = useNavigate()

    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Altere Sua Senha</SRegisterFormTitle>
            <SInput type='text' placeholder='Nova Senha'></SInput>
            <SInput type='text' placeholder='Confirme a Nova Senha'></SInput>
            <br />
            <SRegisterBtn onClick={() => {
                        navigate('/modifiedpassword')
            }}>Alterar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

function PasswordChanged() {

    let navigate = useNavigate()

    return <SForm>
        <RegisterFormDiv>
            <img src={changedPasswordImg}></img>
            <SPasswordChangedText>Senha Alterada!</SPasswordChangedText>
            <br />
            <SRegisterBtn onClick={() => {
                        navigate('/')
            }}>
                Retornar ao Login
            </SRegisterBtn>
        </RegisterFormDiv>
    </SForm>

}

function RegisterForm() {

    let navigate = useNavigate()

    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Faça Sua Conta</SRegisterFormTitle>
            <SInput type='text' placeholder='Nome Completo'></SInput>
            <SInput type='text' placeholder='CPF'></SInput>
            <SInput type='text' placeholder='E-mail'></SInput>
            <SInput type='text' placeholder='Data de Nascimento'></SInput>
            <SRegisterBtn onClick={() => {
                        navigate('/registrationpassword')
            }}>Continuar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

export  { RegisterForm, RegisterPassword, SendEmailCode, SetPassword, PasswordChanged };