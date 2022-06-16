import ButtonArea from "../../components/buttonArea/ButtonArea";
import InfoAccountArea from "../../components/infoAccountArea/InfoAccountArea";
import { StyledCustomerArea }from "./styles.js";
import Header from "../../components/Header/index.jsx";

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
