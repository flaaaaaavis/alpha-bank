import CustomerArea from "./pages/customerArea/CustomerArea";
import { GlobalStyle } from './style/style.js';
import { AccountProvider } from "./contexts/AccountContext";
import { UserProvider } from "./contexts/UserContext"; 
import { CardProvider } from "./contexts/CardContext";


function App() {
  return (
    <>
      <UserProvider><AccountProvider><CardProvider>      
        <GlobalStyle />
        <CustomerArea />
      </CardProvider></AccountProvider></UserProvider>
    </>    
  );
}

export default App;