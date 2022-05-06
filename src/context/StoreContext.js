import { createContext, useReducer, useContext } from "react"
import { cartReducer } from "./AppReducer";

const Cart = createContext()

const StoreContext = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    })
  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default StoreContext

export const CartState = () => {
    return useContext(Cart);
}