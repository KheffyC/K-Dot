import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Checkout = () => {

  const { addToCart } = useContext(CartContext) 

  return (
    <div className="CheckoutPage">
      <div className="CheckoutForm">
        <h1 style={{marginTop: '-40px', marginBottom: '20px'}}>Getting your Order</h1>
        <br style={{color:'red', width: '500px'}}/>
        <form>
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
              <input className='StateZipInput' type='text' />
              <label htmlFor='CVC'>CVC Code</label>
              <input className='StateZipInput' type='number'/>
            </div>
          </div>
          <button type='submit'>Place Your Order</button>
        </form>
      </div>
      <div className="CheckoutSummary"> <h2>Order Summary</h2><hr style={{marginBottom: '20px'}}/>
          <div className='CheckoutCart'>
            {addToCart.map((cartItem, index) => (
              <div className='CheckoutItemContainer' key={index}>
                  <h5 style={{textAlign: 'left'}}>{cartItem.title}</h5>
                  <h5 style={{textAlign: 'center'}}>{cartItem.quantity}</h5>
                  <h5 style={{textAlign: 'center'}}>${cartItem.price}</h5>
              </div>))}
          </div>
      </div>
      {/* <div className='CheckoutCart' style={{border: '2px solid red', height: '500px'}}></div> */}
      
    </div>
  )
}

export default Checkout