import CustomerArea from "./pages/customerArea/CustomerArea";
import DepositArea from './pages/DepositArea.jsx'
import AccountArea from "./pages/accountArea/account";
import { GlobalStyle } from './style/style.js';


function App() {
  return (
    <>
      <CustomerArea />
      <GlobalStyle />
      <DepositArea />
      <AccountArea />
    </>    
  );
}

export default App;