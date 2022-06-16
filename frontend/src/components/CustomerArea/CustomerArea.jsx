import ButtonArea from "../ButtonArea/ButtonArea";
import InfoAccountArea from "../InfoAccountArea/InfoAccountArea";
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
