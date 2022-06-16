import { GlobalStyle } from './style/style.js';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom'
import DepositArea from './pages/DepositArea.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CustomerArea from './pages/customerArea/CustomerArea.jsx';
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

      <Route path='/registration'
             element={<RegisterPage />}
      ></Route>

      <Route path='/registrationpassword'
             element={<RegisterBoxPassword />}
      ></Route>

       <Route path='/customerarea' 
              element={<CustomerArea />}>
       </Route>
      </Routes>
    </Router>

    </>    
  );
}

export default App;