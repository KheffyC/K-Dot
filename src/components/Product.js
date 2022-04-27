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
                <h3>{props.product.title}</h3>
                <h4>Category: {props.product.category}</h4>
            </div>
        </div>
    </div>
  )
}

export default Product