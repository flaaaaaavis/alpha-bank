import DepositArea from './pages/DepositArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import RecoverPage from './pages/RecoverPage';
// <DepositArea />
import DepositAmount from './pages/DepositAmount.jsx'
//import DepositArea from './pages/DepositArea'
//import CardArea from './pages/CardArea'
import { GlobalStyle } from './style/style.js';
import { AccountProvider } from "./contexts/AccountContext";
import { UserProvider } from "./contexts/UserContext"; 
import { CardProvider } from "./contexts/CardContext";
import { TransactionsProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <LoginPage />
      
    </>    
  );
}

export default App;