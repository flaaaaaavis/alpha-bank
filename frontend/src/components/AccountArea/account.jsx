import UserData from "../UserData/UserData.jsx";
import AccessData from "../AccessData/AccessData.jsx";
import { StyledAccountArea } from "./styles.js";

function AccountArea() {
  return (
        <StyledAccountArea>
            <UserData />
            <AccessData />
        </StyledAccountArea>
   );
}

export default AccountArea;