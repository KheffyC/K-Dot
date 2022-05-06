import React, { createContext, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {

  const { addToCart } = useContext(CartContext)

  return (
    <div className='CartPageContainer'>
      <div className='CartHero'>
        <h1>Your cart total is $1,412.66 </h1>
        <h5>Free Delivery and free returns</h5>
        <button>CHECK OUT</button>
      </div>
      <div className='CartCheckoutContainer'>
        <br />
          <div className='CartItemContainer'>
            <div className='CartItem'><h3>Product</h3></div> 
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
            <h3>Remove</h3>
          </div>
      </div>
      <div className='CartCheckoutContainer'>
        <br />
        {addToCart.map((cartItem, index) => (
          <div className='CartItemContainer'>
            <div className='CartItem' key={index}>
                <h3>{cartItem.title}</h3>
            </div> 
            <div>{cartItem.price}</div>
            <div class="counter">
              <span class="down"><FaMinus /></span>
              <input type="text" value="1" />
              <span class="up"><FaPlus /></span>
            </div>            
            <div>Total</div>
            <div>{cartItem.remove}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart