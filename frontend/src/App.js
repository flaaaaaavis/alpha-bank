import { GlobalStyle } from './style/style.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DepositArea from './pages/DepositArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CustomerPage from './pages/CustomerPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
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
    <AccountProvider><UserProvider><CardProvider><TransactionsProvider>
    
      <GlobalStyle />
      <LoginPage />
      <Router>
      <Routes>
      
      </Routes>
    </Router>
    </TransactionsProvider></CardProvider></UserProvider></AccountProvider>
    </>    
  );
}

export default App;