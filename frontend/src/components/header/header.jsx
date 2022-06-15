import React, {useContext} from 'react';
import logo from '../../images/logo.png'
import exitButton from '../../images/exitButton.png'
import { StyledLogoBox , FlexContainer , StyledHeader , StyledUserInfo } from './header';
import { AccountContext } from '../../contexts/AccountContext';
import { UserContext } from '../../contexts/UserContext';


function Header() {

  const { number } = useContext(AccountContext);
  const { name } = useContext(UserContext);

  return(
    <StyledHeader>
      <FlexContainer>
        <StyledLogoBox>
          <img src={logo} alt="Logo Alpha Bank" />
        </StyledLogoBox>
        <StyledUserInfo>
          <h1>{name}</h1>
          <p>Agencia: <span>0923-5</span> | Conta: <span>{number}</span></p>
        </StyledUserInfo>
        <div>
          <img src={exitButton} alt="Sair" />
        </div>
      </FlexContainer>
    </StyledHeader>
  )
  
}

export default Header;