import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';


function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
         <Outlet /> 
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
