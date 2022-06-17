import ButtonArea from "../buttonArea/ButtonArea";
import InfoAccountArea from "../infoAccountArea/InfoAccountArea";
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
