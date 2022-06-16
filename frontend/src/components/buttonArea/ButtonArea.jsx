import Button from "../ButtonCustomerArea/Button.jsx";
import { StyledDiv }from "./styles.js";
import imageaccount from "../../images/accountLogo.png" 
import imagecard from "../../images/cardLogo.png" 
import imagedeposit from "../../images/depositLogo.png" 
import imageextract from "../../images/extractLogo.png" 
import imagetransaction from "../../images/transactionLogo.png" 
import {BrowserRouter as Router, Link} from 'react-router-dom';

function ButtonArea() {
  return (
    <StyledDiv>
      <Router>
        <Link to="/conta">
          <Button 
          image={imageaccount}
          title="Conta"
          />
        </Link>
        <Link to="/deposito">
          <Button 
          image={imagedeposit}
          title="Depósito"
          />
        </Link>
        <Link to="/cartoes">
          <Button 
          image={imagecard}
          title="Cartões"
          />
        </Link>
        <Link to="/extrato">
          <Button 
          image={imageextract}
          title="Extrato"
          />
        </Link>
        <Link to="/transacoes">
          <Button 
          image={imagetransaction}
          title="Transações"
          />
        </Link>
      </Router>
    </StyledDiv>
  );
}

export default ButtonArea;