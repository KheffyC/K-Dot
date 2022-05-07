import { createContext, useState } from 'react'

export const CartContext = createContext({})

const CartProvider = ({children}) => {

    const [ addToCart, setAddToCart ] = useState([{category: "men's clothing"
    ,description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
    ,id: 2
    ,image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    ,price: 22.3,title: "Mens Casual Premium Slim Fit T-Shirts "}]);

    console.log("this is my current Cart", addToCart)

  return ( 
    <CartContext.Provider value ={{ addToCart, setAddToCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider