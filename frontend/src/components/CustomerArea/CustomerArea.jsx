import ButtonArea from "../ButtonArea/ButtonArea.jsx";
import Saldo from "../Saldo/Saldo.jsx";
import { StyledCustomerArea }from "./styles.js";

function CustomerArea() {
  return (
      <StyledCustomerArea>
        <Saldo />,
        <ButtonArea />
      </StyledCustomerArea>
  );
}

export default CustomerArea;
