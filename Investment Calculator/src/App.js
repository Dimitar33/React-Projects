
import React, {useState} from 'react';
import logo from './assets/investment-calculator-logo.png';
import InvestmentTable from './components/InvestmentTable';
import InvestmentForm from './components/InvestmentForm';
import calculateHandler from './components/calculateHandler';

function App() {

      
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm ></InvestmentForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <calculateHandler></calculateHandler>
    </div>
  );
}

export default App;
