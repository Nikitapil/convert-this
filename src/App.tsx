import React from 'react';
import './styles/App.scss';
import {Routes, Route} from 'react-router-dom'
import { CurrencyExchange } from './pages/CurrencyExchange';
import { CurrencyConverter } from './pages/CurrencyConverter';
import { ExchangeRates } from './pages/ExchangeRates';

function App() {
  return (
    <div className="App" data-testid='app'>
      <Routes>
        <Route path='/' element={<CurrencyExchange/>}>
          <Route path='converter' element={<CurrencyConverter/>} />
          <Route path='rates' element={<ExchangeRates/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
