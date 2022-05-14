import React, { createContext } from 'react'

export const CartContext = createContext({})

const CartProvider = ({children}) => {

  // Save Cart to Local Storage
    function useStickyState(defaultValue, key) {
      const [value, setValue] = React.useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null
          ? JSON.parse(stickyValue)
          : defaultValue;
      });
      React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
      return [value, setValue];
    }


    const [ addToCart, setAddToCart ] = useStickyState([], "cart")

    console.log("this is my current Cart", addToCart)

  return ( 
    <CartContext.Provider value ={{ addToCart, setAddToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider