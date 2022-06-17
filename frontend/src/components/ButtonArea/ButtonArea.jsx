import Button from "../ButtonCustomerArea/Button.jsx";
import { StyledDiv }from "./styles.js";
import imageaccount from "../../images/accountLogo.png" 
import imagecard from "../../images/cardLogo.png" 
import imagedeposit from "../../images/depositLogo.png" 
import imageextract from "../../images/extractLogo.png" 
import imagetransaction from "../../images/transactionLogo.png" 
import { useNavigate } from 'react-router-dom'

function ButtonArea() {
  let navigate = useNavigate()
  return (
    <StyledDiv>
          <Button 
          image={imageaccount}
          title="Conta"
          onClick={() => {
            navigate('/accountpage')
          }}
          />
          <Button 
          image={imagedeposit}
          title="Depósito"
          onClick={() => {
            navigate('/deposit')
          }}
          />
          <Button 
          image={imagecard}
          title="Cartões"
          onClick={() => {
            navigate('/cardarea')
          }}
          />
          <Button 
          image={imageextract}
          title="Extrato"
          onClick={() => {
            navigate('/statements')
          }}
          />
          <Button 
          image={imagetransaction}
          title="Transações"
          onClick={() => {
            navigate('/transactions')
          }}
          />
    </StyledDiv>
  );
}

export default ButtonArea;