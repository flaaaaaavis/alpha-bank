import Button from "../buttonCustomerArea/Button.jsx";
import { StyledDiv }from "./styles.js";
import imageaccount from "../../images/accountLogo.png" 
import imagecard from "../../images/cardLogo.png" 
import imagedeposit from "../../images/depositLogo.png" 
import imageextract from "../../images/extractLogo.png" 
import imagetransaction from "../../images/transactionLogo.png" 

function ButtonArea() {
  return (
    <StyledDiv>
        <Button 
        image={imageaccount}
        title="Conta"
        Link to="/"
        />
        <Button 
        image={imagecard}
        title="Cartão"
        onClick="clicou"
        />
        <Button 
        image={imagedeposit}
        title="Depósito"
        onClick="clicou"
        />
        <Button 
        image={imageextract}
        title="Extrato"
        onClick="clicou"
        />
        <Button 
        image={imagetransaction}
        title="Transações"
        onClick="clicou"
        />
    </StyledDiv>
  );
}

export default ButtonArea;