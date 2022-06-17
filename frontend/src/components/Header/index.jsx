import React, {useContext} from 'react';
import logo from '../../images/logo.png'
import exitButton from '../../images/exitButton.png'
import { StyledHeader, StyledContainerLeft, StyledLogo, StyledUserInfo, StyledExitButton } from './index';
import { AccountContext } from '../../contexts/AccountContext';
import { UserContext } from '../../contexts/UserContext';


function Header() {
  const {name} = useContext(UserContext)
  const {number} = useContext(AccountContext)

  return(
    <StyledHeader>
      <StyledContainerLeft>
          <StyledLogo src={logo} alt="Logo AlphaBank" />
          <StyledUserInfo>
            <h1>{name}</h1>
            <p>Agencia: <span>0001</span> | Conta: <span>{number}</span></p>
          </StyledUserInfo>
      </StyledContainerLeft>

        <StyledExitButton src={exitButton} alt="Sair" />
    </StyledHeader>
  )
}

export default Header