import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {

  const { addToCart } = useContext(CartContext)
  const { setAddToCart } = useContext(CartContext)
  const [ value, setValue ] = useState(1)
 
  // Remove Product from Array and set new State
  const RemoveCartItem = (title) => {
    const remove = addToCart.filter(item => item.title !== title)

    setAddToCart(remove)
    console.log("removed", addToCart)
  }

  // function getSum(total, num){
  //   return total + Math.round(num);
  // }

  // function grabTotals(){
  //   addToCart.map((item, id) => item.price)
  // }
  // console.log(grabTotals())

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
            <div className='CartItem'><h2>Product</h2></div> 
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Total</h2>
            <h2>Remove</h2>
          </div>
      </div>
      <div className='CartCheckoutContainer'>
        <br />
        {addToCart.map((cartItem, index) => (
          <div className='CartItemContainer' key={index}>
              <div className='CartItem' >
                  <h3>{cartItem.title}</h3>
              </div> 
              <div>{cartItem.price}</div>
              <div className="counter">
                <span className="down"><FaMinus onClick={() => setValue(value - 1)}/></span>
                <input type="text" value={value} onChange={e => e.target.value}/>
                <span className="up"><FaPlus onClick={() => setValue(value + 1)}/></span>
              </div>            
              <div>{Number.parseFloat(cartItem.price, 10) * value}</div>
              <div className='CartRemove' onClick={() => RemoveCartItem(cartItem.title)}>Remove</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart