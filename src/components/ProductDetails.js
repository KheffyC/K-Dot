import React, { useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';

const ProductDetails = (props) => {
    let params = useParams();
    const { clickedProduct } = useContext(ProductContext)
    // const { productArray } = useContext(ProductContext)


   console.log("params", params)
//    console.log("array", productArray)

//    const products = props.products;
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
                    <span>Description: </span>{clickedProduct.description}
                </div>
                <div className='DetailCategory'>
                    <hr />
                    <span>Category: </span>{clickedProduct.category}
                </div>
                <div className='DetailPrice'>
                    <span>Price: </span> {clickedProduct.price}
                </div>
            </div>
        </div>
        <Link to="/Products">Return</Link>
    </div>
  )
}

export default ProductDetails