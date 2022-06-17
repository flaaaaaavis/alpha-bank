import UserData from "../UserData/userdata";
import AccessData from "../AccessData/accessdata";
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