import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [ products, setProducts ] = useState([]);

    async function getProducts(){
        const url = `https://fakestoreapi.com/products`
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data)
    }
    useEffect(() => {
        getProducts();
    }, [])


  return (
    <div className='container'>
        {products.map((product, id) => 
            <div key={product.id}>
                <Product 
                    product={product}                
                />
            </div>        
        )}

    </div>
  )
}

export default Products