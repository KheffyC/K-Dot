import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { FaTimes } from 'react-icons/fa'


const Checkout = () => {

  const { addToCart, setAddToCart } = useContext(CartContext) 
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
  const subtotal = () => {
      const subTotalArray = addToCart.map(item => item.quantity * item.price)
      if (subTotalArray === []){
        return addToCart
      } else {
      const sum = subTotalArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
        });   
      return (Number.parseFloat(sum).toFixed(2));
    }
  }

  //Estimate Tax 
  const tax = Number.parseFloat(subtotal() * .0725).toFixed(2); 

  // Final Total 
  const cartTotal = () => {
    const subTotalArray = addToCart.map(item => item.quantity * item.price)
    const subSum = subTotalArray.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
      });
    const sumTax = subSum * .0725;
    return (Number.parseFloat(subSum + sumTax).toFixed(2))
  }

  // Clear Cart and Return to Home

  const placeOrder = () => {
    setAddToCart([]);
    navigate('/');
    alert("Thank you! Your Order has been placed!")
  }

  return (
    <div className="CheckoutPage">
      <div className="CheckoutForm">
        <h1 style={{marginTop: '-40px', marginBottom: '20px'}}>Getting your Order</h1>
        <br style={{color:'red', width: '500px'}}/>
        <form onSubmit={placeOrder}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Shipping Information</h2>
            <label htmlFor='FirstName'>First Name</label>
            <input type='text' className="inputField" />
            <label htmlFor='LastName'>Last Name</label>
            <input type='text' className="inputField" />
            <label htmlFor='Address'>Address</label>
            <input type='text' className="inputField" />
            <input type ='text' className="inputField" placeholder='Apt#, Suite, Floor(optional)'/>
            <label htmlFor='City'>City</label> 
            <input type='text' className="inputField"/>
            <div className='StateZip'>
              <label htmlFor='State'>State</label>
              <select className='StateZipInput'><option></option><option>CA</option></select>
              <label htmlFor='ZIP'>ZIP Code</label>
              <input className='StateZipInput' type='text' />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Payment Information</h2>
            <label htmlFor='CardName'>Name On Card</label>
            <input className="inputField" type='text' />
            <label htmlFor='CreditCard'>Card Information</label>
            <input  className="inputField" type='number' placeholder='1515 6783 9427 9457'/>
            <div className='StateZip'>
              <label htmlFor='ExpDate'>Exp. Date</label>
              <input className='StateZipInput' type='text' placeholder='MM/YY' />
              <label htmlFor='CVC'>CVC Code</label>
              <input className='StateZipInput' type='number'/>
            </div>
          </div>
          <button type='submit' style={{ backgroundColor: '#181616', color: 'white', height: '50px', width: '300px', borderRadius: '10px', fontSize: '18px'}}>Place Your Order</button>
        </form>
      </div>
      <div className="CheckoutSummary"> <h2>Order Summary</h2><hr style={{marginBottom: '20px'}}/>
          <div className='CheckoutCart'>
            {addToCart.map((cartItem, index) => (
              <div className='CheckoutItemContainer' key={index}>
                  <h5 style={{textAlign: 'left'}}>{cartItem.title}</h5>
                  <h5 style={{textAlign: 'center'}}>{cartItem.quantity}</h5>
                  <h5 style={{textAlign: 'center'}}>${cartItem.price}</h5>
                  <div className='CheckoutRemove' onClick={() => removeCartItem(cartItem.title)} style={{color: '#990011'}}><FaTimes /></div>
              </div>))}
          </div>
          <div className="CheckoutTotalSummary">
            <div className="div1">Subtotal </div><div className="div2">${subtotal()} </div>
            <div className="div3">Shipping </div><div className="div4"> FREE</div>
            <div className="div5">Estimated Tax </div><div className="div6">${tax}</div>
            <div className="div7">TOTAL </div><div className="div8">${cartTotal()}</div>
        </div> 
      </div>      
    </div>
  )
}

export default Checkout