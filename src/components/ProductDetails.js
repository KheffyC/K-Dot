import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = (props) => {
    const { clickedProduct } = useContext(ProductContext)
    const { setAddToCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)



  return (
    <div>
        {/* {productArray?.filter(product => product.id == params.id).map((prod, id) => (
            <div className='prodDetail' key={prod.id}>
                {prod.title}
            </div>
        ) )} */}
        <div className='DetailPage'>
            <div className='DetailImage'>
                <img src={clickedProduct.image} alt={clickedProduct.title}/>
            </div>
            <div className='DetailDescription'>
                <div className='DetailDetail'>
                    <span>Description: </span>
                    <p>{clickedProduct.description}</p>
                </div>
                <div className='DetailCategory'>
                    <hr />
                    <span>Category: </span>{clickedProduct.category}
                </div>
                <div className='DetailPrice'>
                    <span>Price: </span> ${clickedProduct.price}
                </div>
            </div>
            <button onClick={() => setAddToCart([...addToCart, clickedProduct]) }>ADD TO CART</button>
        </div>
        <Link to="/Products">Return</Link>
    </div>
  )
}

export default ProductDetails