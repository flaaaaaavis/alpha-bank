import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './style/style.js';
import TransactionsPage from './pages/Transactions.jsx'
import StatementsPage from './pages/StatementsPage.jsx'
import CardArea from './pages/CardArea.jsx'

function App() {
  return (
    <>
      <GlobalStyle />
      
      <BrowserRouter>
          <Routes>
              <Route exact path="/cards" element={<CardArea />} />

              <Route exact path="/statements" element={<StatementsPage />} />
              <Route exact path="/transactions" element={<TransactionsPage />} />
          </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;