import ButtonArea from "../buttonArea/ButtonArea";
import InfoAccountArea from "../infoAccountArea/InfoAccountArea";
import { StyledCustomerArea }from "./styles.js";
import Header from "../../components/header/header.jsx";

function CustomerArea() {
  return (
    <div>
      <Header />
      <StyledCustomerArea>
        <InfoAccountArea />,
        <ButtonArea />
    </StyledCustomerArea>
    </div>
  );
}

export default CustomerArea;
