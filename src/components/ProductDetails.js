import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = (props) => {
    const { clickedProduct } = useContext(ProductContext)
    const { setAddToCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)

    const [ clicked, setClicked ] = useState(false)
    const navigate = useNavigate();
    
    const addItem = (product, quantity) => {
        setClicked(true)
        const item = {
            image: product.image,
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: quantity,
        };
        const filteredCart = addToCart.filter(cartItem => cartItem.id === item.id);
        
        if(filteredCart.length === 0){
            setAddToCart([...addToCart, item])
        } else if (filteredCart){
            let updatedQuantity = filteredCart[0].quantity + quantity
            filteredCart[0].quantity = updatedQuantity;
            console.log(filteredCart, "filteredCart")
            console.log("add to Cart", addToCart) 
        }
       
    }

    

  return (
    <div>
        <div className='DetailPage'>
            <div className='DetailImage'>
                <img style={{margin: '0px 20px 10px -10px'}} src={clickedProduct.image} alt={clickedProduct.title}/>
            </div>
            <div className='DetailDescription'>
                <div className='DetailDetail'>
                    <h2>{clickedProduct.title}</h2>
                    <span>Description: </span>
                    <p>{clickedProduct.description}</p>
                </div>
                <div className='DetailCategory'>
                    <br />
                    <span>Category: </span>{clickedProduct.category}
                </div>
                <div className='DetailPrice'>
                    <span>Price: </span> ${clickedProduct.price}
                </div>
            </div>
        </div>
        <hr />
        <div className='DetailRoutes'>
            <button className='ContShopping' onClick={() => navigate("/Products")}>CONTINUE SHOPPING</button>
            {!clicked ? <button onClick={() => addItem(clickedProduct, 1)}>ADD TO CART</button> : <button style={{backgroundColor: 'green'}}>ADDED TO CART</button> } 
            {addToCart.length > 0 ? <button onClick={() => navigate("/Cart")}>PROCEED TO CART</button> : <button>PROCEED TO CART</button> }
        </div>
    </div>
  )
}

export default ProductDetails