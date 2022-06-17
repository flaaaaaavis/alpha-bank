import UserData from "../userdata/userdata";
import AccessData from "../accessdata/accessdata.jsx";
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