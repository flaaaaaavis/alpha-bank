import { GlobalStyle } from './style/style.js';

import DepositArea from './pages/DepositArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import RecoverPage from './pages/RecoverPage.jsx';
import Statements from './pages/Statements.jsx'
import Transactions from './pages/Transactions.jsx'
import DepositAmount from './pages/DepositAmount.jsx'
import CardArea from './pages/CardArea.jsx'
import { AccountProvider } from "./contexts/AccountContext";
import { UserProvider } from "./contexts/UserContext"; 
import { CardProvider } from "./contexts/CardContext";
import { TransactionsProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <>
        <AccountProvider>
            <UserProvider>
                <CardProvider>
                    <TransactionsProvider>
              
                        <GlobalStyle />
                        <Transactions />

                    </TransactionsProvider>
                </CardProvider>
            </UserProvider>
        </AccountProvider>
    </>    
  );
}

export default App;