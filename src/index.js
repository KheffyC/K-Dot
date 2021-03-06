import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/K-Dot'>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />}/>
          <Route path="/Products" element={<Products/>} />
          <Route path="/Products/:id" element={<ProductDetails  />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
