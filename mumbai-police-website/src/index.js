import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages import
import Login from './Pages/Login';
import Home from './Pages/Home';
import Pending_case from './Pages/pending_case';
import Map from './Pages/Map';
import FAQPage from './Pages/Faq';
import Firservice from './Components/fir';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/pending_case" element={<Pending_case />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/faq" element={<FAQPage />} />
        <Route path="/fir" element={<Firservice/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
