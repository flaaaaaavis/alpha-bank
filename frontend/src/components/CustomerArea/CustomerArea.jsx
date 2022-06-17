import ButtonArea from "../buttonArea/ButtonArea.jsx";
import InfoAccountArea from "../infoAccountArea/InfoAccountArea.jsx";
import { StyledCustomerArea }from "./styles.js";

function CustomerArea() {
  return (
      <StyledCustomerArea>
        <InfoAccountArea />,
        <ButtonArea />
    </StyledCustomerArea>
  );
}

export default CustomerArea;
