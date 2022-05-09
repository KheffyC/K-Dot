import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = (props) => {
    const { clickedProduct } = useContext(ProductContext)
    const { setAddToCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)

    const navigate = useNavigate();

    // console.log(filteredCart);
    
    const addItem = (product, quantity) => {
        const item = {
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
            <button onClick={() => addItem(clickedProduct, 1)}>ADD TO CART</button>
            <button>PROCEED TO CART</button>
            <button className='ContShopping' onClick={() => navigate("/Products")}>CONTINUE SHOPPING</button>
        </div>
    </div>
  )
}

export default ProductDetails