import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { ProductContext } from '../context/ProductContext'

const Product = (props) => {

    const { setClickedProduct } = useContext(ProductContext)



  return (
    <div className='productCardContainer' >
    <Link to={`/Products/${props.product.id}`} onClick={() => setClickedProduct(props.product)}>
        <div className='productCard'>
            <div className='productImage'>
                <img src={props.product.image} alt={props.product.image}/>
            </div>
            <button className='AddToCart'>View More</button>
            <div className='productInfo'>
                <div className='productCategory'>
                    Category: {props.product.category}  
                </div>
                <div className='productTitle'>
                    <h4>{props.product.title}</h4>
                </div>
            </div>
            <div className='productBottom'>
                <div className="productPrice">${props.product.price}</div>
            </div>
        </div>
    </Link>    
    </div>
  )
}

export default Product