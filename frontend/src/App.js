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
      <UserProvider><AccountProvider><CardProvider><TransactionsProvider>
        <GlobalStyle />
        <DepositAmount />
      </TransactionsProvider></CardProvider></AccountProvider></UserProvider>
    </>    
  );
}

export default App;