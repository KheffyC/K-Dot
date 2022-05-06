import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import Toggle from './Toggle';

const Products = () => {
    // const [isLoading, setIsLoading] = useState(true)
    const { setProductArray } = useContext(ProductContext)

    const [ products, setProducts ] = useState([]);

    async function getProducts(){
        const url = `https://fakestoreapi.com/products`
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data)
        setProductArray(data)
        // setIsLoading(false)
    }
    useEffect(() => {
        getProducts();
    }, [])

    


 
  return (
    <div className='container'> 
    <div className='FilterNav'>
        <h2>FILTER </h2>
        <ul>
            <Toggle filter = 'Mens'/>
            <Toggle filter = 'Womens'/>
            <Toggle filter = 'Jewelry'/>
            <Toggle filter = 'Technology'/>
        </ul>
    </div>
        <div className='ProductList'>
            {products.map((product, id) => 
                <div key={product.id}>
                    <Product 
                        product={product}                
                    />
                </div>        
            )}
        </div>

    </div>
  )
}

export default Products