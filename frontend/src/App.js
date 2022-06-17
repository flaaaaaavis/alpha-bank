import { GlobalStyle } from './style/style.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DepositArea from './pages/DepositArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CustomerPage from './pages/CustomerPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { RegisterBoxPassword } from './components/RegisterBox/RegisterBox.jsx'
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
    <GlobalStyle />
    <Router>
      <Routes>
      <Route path ='/'
             element={<LoginPage />}
      />
      <Route path='/statements'
             element={<Statements />}
      ></Route>
      <Route path='/registration'
             element={<RegisterPage />}
      ></Route>
      <Route path='/transactions'
             element={<Transactions />}
      ></Route>
      <Route path='/deposit'
             element={<DepositArea />}
      ></Route>
      <Route path='/registrationpassword'
             element={<RegisterBoxPassword />}
      ></Route>
       <Route path='/cardarea'
             element={<CardArea />}
      ></Route>
      <Route path='/customerpage' 
              element={<CustomerPage />}
      ></Route>
      <Route path='/accountpage'
             element={<AccountPage />}
      ></Route>
      </Routes>
    </Router>
    </>    
  );
}

export default App;