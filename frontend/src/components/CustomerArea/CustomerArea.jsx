import ButtonArea from "../ButtonArea/ButtonArea.jsx";
import InfoAccountArea from "../InfoAccountArea/InfoAccountArea.jsx";
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
