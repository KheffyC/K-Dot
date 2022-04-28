import React from 'react'

const Product = (props) => {
    console.log(props)
  return (
    <div className='productCardContainer'>
        <div className='productCard'>
            <div className='productImage'>
                <img src={props.product.image} alt={props.product.image}/>
            </div>
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
    </div>
  )
}

export default Product