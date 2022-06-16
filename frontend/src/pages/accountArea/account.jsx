import UserData from "../../components/userdata/userdata";
import AccessData from "../../components/accessdata/accessdata";
import Header from "../../components/Header/index.jsx";
import { StyledAccountArea, StyledContainer }from "./styles.js";

function AccountArea() {
  return (
    <StyledContainer>
        <Header />
        <StyledAccountArea>
            <UserData />
            <AccessData />
        </StyledAccountArea>
    </StyledContainer>
  );
}

export default AccountArea;