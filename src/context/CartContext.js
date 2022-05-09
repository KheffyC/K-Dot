import { createContext, useState } from 'react'

export const CartContext = createContext({})

const CartProvider = ({children}) => {

    const [ addToCart, setAddToCart ] = useState([{id: 2,
      price: 22.3,
      quantity: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts "}]);

    console.log("this is my current Cart", addToCart)

  return ( 
    <CartContext.Provider value ={{ addToCart, setAddToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider