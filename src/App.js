import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import BillForm from './Components/BillForm';
import BillSummary from './Components/BillSummary';
import Home from './Components/Home';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<BillForm />} />
          <Route path="/summary" element={<BillSummary />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

