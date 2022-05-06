import { createContext, useState } from 'react'

export const CartContext = createContext({})

const CartProvider = ({children}) => {

    const [ addToCart, setAddToCart ] = useState([{title: "hohoohoh", price: "Price", quantity: "quantity", remove: "remove"}, {title: "hahahaha", price: "Price", quantity: "quantity", remove: "remove"}, {title: "hohoohoh", price: "Price", quantity: "quantity", remove: "remove"}, {title: "hahahaha", price: "Price", quantity: "quantity", remove: "remove"}]);
    console.log("this is my current Cart", addToCart)

  return ( 
    <CartContext.Provider value ={{ addToCart, setAddToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider