import React from 'react';
import { SForm, SInput, SRegisterBtn, SRegisterPage, RegisterFormDiv, SFrontPageImg, SFrontPageLogo, SLogoText, SRegisterFormTitle, SRecoverPageImg } from '../RegisterBox/RegisterBox.js'
import recoverImage from '../../images/recover-img.png'


function RecoverBox() {
    return <SRegisterPage>
    <SForm>
        <RegisterFormDiv>
            <SRegisterFormTitle>Solicite seu código</SRegisterFormTitle>
        <SInput type='text' placeholder="E-mail"></SInput>
        <SInput type='text' placeholder="Confirmar E-mail"></SInput>
        <SRegisterBtn>Continuar</SRegisterBtn>
        </RegisterFormDiv>
    </SForm>
    <SRecoverPageImg src={recoverImage} alt='smth'></SRecoverPageImg>
    </SRegisterPage>
    ;

}

export default RecoverBox;