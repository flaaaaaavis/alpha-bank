import CardArea from './pages/CardArea.jsx'
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
        <CardArea />
      </TransactionsProvider></CardProvider></AccountProvider></UserProvider>
    </>    
  );
}

export default App;