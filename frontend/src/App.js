import CustomerArea from "./pages/customerArea/CustomerArea";
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
        <CustomerArea />
      </TransactionsProvider></CardProvider></AccountProvider></UserProvider>
    </>    
  );
}

export default App;