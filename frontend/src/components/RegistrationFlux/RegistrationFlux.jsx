import React, { useContext } from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle, SPasswordChangedText } from '../RegisterBox/RegisterBox.js'
import { RegisterContext } from '../../contexts/RegisterContext';
import changedPasswordImg from '../../images/changed-password.png'
import { useNavigate } from 'react-router-dom'


function RegisterPassword() {
    
    const { name, cpf, email, bDate, password, setPassword } = useContext(RegisterContext);
    let navigate = useNavigate();
    
    async function registerUser(e){
        e.preventDefault();       

        const newUser = {
            name: name,
            cpf: cpf,
            email: email,
            bDate: bDate,
            password: password
        };

        console.log(newUser)

        const options = {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };

        const response = await fetch("http://localhost:4000/addUser", options)
                               .then(data => data.json())
                               .then(res => res)
                               .catch(error => console.log(error));
        if (response.status) {
            
            navigate('/registrationemailcode')

        } else {

            console.log(response.message)

        }        

    }


    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Dados de Acesso</SRegisterFormTitle>
            <SInput type='password' placeholder='Senha' value={password} onInput={event => setPassword(event.target.value)} ></SInput>
            <SInput type='password' placeholder='Confirme Sua Senha'></SInput>
            <br />
            <SRegisterBtn onClick={registerUser}> Continuar
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
            <img src={changedPasswordImg} alt="" />
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

    const { name, cpf, email, bDate, setName, setCpf, setEmail, setBDate } = useContext(RegisterContext);

    let navigate = useNavigate()    

    return <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Faça Sua Conta</SRegisterFormTitle>
            <SInput type='text' placeholder='Nome Completo' value={name} onInput={event=> setName(event.target.value)} />
            <SInput type='text' placeholder='CPF' value={cpf} onInput={event=> setCpf(event.target.value)} />
            <SInput type='text' placeholder='E-mail' value={email} onInput={event=> setEmail(event.target.value)} />
            <SInput type='date' placeholder='Data de Nascimento' value={bDate} onInput={event=> setBDate(event.target.value)} />
            <SRegisterBtn onClick={() => {
                        navigate('/registrationpassword')
            }}>Continuar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
}

export  { RegisterForm, RegisterPassword, SendEmailCode, SetPassword, PasswordChanged };