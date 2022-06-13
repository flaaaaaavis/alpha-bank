import React from 'react';
import logo from '../../images/logo.png'
import exitButton from '../../images/exitButton.png'
import { StyledLogoBox , FlexContainer , StyledHeader , StyledUserInfo } from './header';


function Header() {
  return(
    <StyledHeader>
      <FlexContainer>
        <StyledLogoBox>
          <img src={logo} alt="Logo Alpha Bank" />
        </StyledLogoBox>
        <StyledUserInfo>
          <h1>Fulano de Tal</h1>
          <p>Agencia: <span>0923-5</span> | Conta: <span>123456123456-78</span></p>
        </StyledUserInfo>
        <div>
          <img src={exitButton} alt="Sair" />
        </div>
      </FlexContainer>
    </StyledHeader>
  )
  
}

export default Header;