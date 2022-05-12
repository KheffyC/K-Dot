import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import CartQuantity from './CartQuantity'

const Cart = () => {

  const { addToCart } = useContext(CartContext)
  const { setAddToCart } = useContext(CartContext)

  const [ subTotal, setSubTotal ] = useState(0) 
  const [ total, setTotal ] = useState(0)
  const [ reRender, setReRender ] = useState(false)

  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  }
 
  // Remove Product from Array and set new State
  const removeCartItem = (title) => {
    const remove = addToCart.filter(item => item.title !== title)

    if (remove.length > 0){
      setAddToCart(remove)
      refreshPage();
    } else {
      setAddToCart(remove);
      navigate("/Products");
    }
  }
  
  

  // Cart Summary 
    const subtotal = () => {
      const subTotalArray = addToCart.map(item => item.quantity * item.price)
      if (subTotalArray === []){
        return addToCart
      } else {
      const sum = subTotalArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
        });   
      setSubTotal(Number.parseFloat(sum).toFixed(2));
    }
    }

  useEffect(() => {
        subtotal();
        cartTotal();
      }, [reRender])

    
    
    //Estimate Tax 
    const tax = Number.parseFloat(subTotal * .0725).toFixed(2); 

    // Final Total 
    const cartTotal = () => {
      const subTotalArray = addToCart.map(item => item.quantity * item.price)
      const subSum = subTotalArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
        });
      const sumTax = subSum * .0725;
      setTotal(Number.parseFloat(subSum + sumTax).toFixed(2))
    }

    // Proceed to Checkout 
    const checkout = () => {
      navigate("/Checkout");
    }
  

  return (
    <div className='CartPageContainer'>
      <div className='CartHero'>
        <h1>Review Your Cart. </h1>
        <h5>Free Delivery and Free Returns</h5>
        <button className='CheckOutButton' onClick={checkout}>CHECK OUT</button>
      </div>
        <br />
      <div className='CartItemHeader'>
          <h2>Product</h2>
          <h2>Title</h2> 
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Remove</h2>
      </div>
        <br />
        <div>
          <div className='CartColumn'>
            {addToCart.map((cartItem, index) => (
              <div className='CartItemContainer' key={index}>
                  <img className='CartImage' src={cartItem.image} alt={cartItem.title} />
                  <h3>{cartItem.title}</h3>
                  <h3>${cartItem.price}</h3>
                  <CartQuantity 
                    index={cartItem.id}
                    cartItem={cartItem}
                    reRender = {reRender}
                    setReRender = {setReRender}
                  />
                <div className='CartRemove' onClick={() => removeCartItem(cartItem.title)}>Remove</div>
              </div>))}
          </div>
        </div>
        <div className="CartSummary">
          <div className="div1">Subtotal </div><div className="div2">${subTotal} </div>
          <div className="div3">Shipping </div><div className="div4"> FREE</div>
          <div className="div5">Estimated Tax </div><div className="div6">${tax}</div>
          <div className="div7">TOTAL </div><div className="div8">${total}</div>
          <div className="div9"><button className='CheckOutButton' onClick={checkout} >CHECK OUT</button></div>
        </div>  
        
    </div>
    )
}

export default Cart