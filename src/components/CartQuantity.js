import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartQuantity = ({ cartItem, index, reRender, setReRender }) => {
    const { addToCart } = useContext(CartContext)
    const [ newQuantity, setNewQuantity ] = useState(cartItem.quantity)

     // Increase/Decrease Cart Item Quantity 
  const changeQuantity = (event) => {
    cartItem.quantity = event.target.value
    setNewQuantity(cartItem.quantity)
    setReRender(!reRender);
    console.log("quantity update", cartItem.quantity, "new cart", addToCart)
  }

  return (
    <>
        <div className="counter" key={index}>
            <select type="text" value={newQuantity} onChange={changeQuantity}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
        </div> 
    </>
  )
}

export default CartQuantity