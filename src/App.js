import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
import StoreContext from './context/StoreContext';
import ProductProvider from './context/ProductContext';


function App() {
  return (
    <ProductProvider>
      <StoreContext>
        <Header />
        <Outlet /> 
      </StoreContext>
    </ProductProvider>
  );
}

export default App;
