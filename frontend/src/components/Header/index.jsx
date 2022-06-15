import React from 'react';
import logo from '../../images/logo.png'
import exitButton from '../../images/exitButton.png'
import { StyledHeader, StyledContainerLeft, StyledLogo, StyledUserInfo, StyledExitButton } from './index';


function Header() {
  return(
    <StyledHeader>
      <StyledContainerLeft>
          <StyledLogo src={logo} alt="Logo AlphaBank" />
          <StyledUserInfo>
            <h1>Fulano de Tal</h1>
            <p>Agencia: <span>0923-5</span> | Conta: <span>123456123456-78</span></p>
          </StyledUserInfo>
      </StyledContainerLeft>

        <StyledExitButton src={exitButton} alt="Sair" />
    </StyledHeader>
  )
}

export default Header