import React, {useState, useContext} from 'react';
import { SForm, SInput, SLoginBtn, SLoginPage, LoginFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SLoginFormTitle, SBelowBtnTxt } from './LoginBox.js';
import loginImage from '../../images/login-img.png';
import logo from '../../images/logo.png';
import logoText from '../../images/AlphaBank.png';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../contexts/AccountContext';
import { UserContext } from '../../contexts/UserContext';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { CardContext } from '../../contexts/CardContext';

function LoginBox() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const { collectAccount } = useContext(AccountContext);
    const { collectUser } = useContext(UserContext);
    const { collectTransactions } = useContext(TransactionsContext);
    const { collectCard } = useContext(CardContext);

    async function handleLogin(e){
        e.preventDefault();

        const login = {
            email: email,
            password: password
        };

        const options = {
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(login),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };

        const response = await fetch("http://localhost:4000/login", options)
                               .then(data => data.json())
                               .then(res => res)
                               .catch(error => console.log(error));
        if (response.auth) {

            collectUser();
            collectAccount();
            collectCard();
            collectTransactions();
            navigate('/customerpage');

        } else {

            console.log(response.message)

        }

    }

    return (
        <SLoginPage>
            <SForm>
                <LoginFormDiv>
                    <SLoginFormTitle>Entrar</SLoginFormTitle>
                    <SInput type='text' placeholder='E-mail' value={email} onInput={event => setEmail(event.target.value)} />
                    <SInput type='password' placeholder='Senha' value={password} onInput={event => setPassword(event.target.value)} />
                    <SLoginBtn onClick={handleLogin}>Continuar</SLoginBtn>
                    <button onClick={() => {
                        navigate('/changepassword')
                    }}><SBelowBtnTxt> Esqueci Minha Senha </SBelowBtnTxt>
                    </button>
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


