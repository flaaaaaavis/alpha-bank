import CustomerArea from "./pages/customerArea/CustomerArea";
import DepositArea from './pages/DepositArea.jsx'
import { GlobalStyle } from './style/style.js';


function App() {
  return (
    <>
      <CustomerArea />
      <GlobalStyle />
      <DepositArea />
    </>    
  );
}

export default App;