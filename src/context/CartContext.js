import { createContext, useState } from 'react'

export const CartContext = createContext({})

const CartProvider = ({children}) => {

    const [ addToCart, setAddToCart ] = useState([]);
    console.log("this is my current Cart", addToCart)

  return ( 
    <CartContext.Provider value ={{ addToCart, setAddToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider