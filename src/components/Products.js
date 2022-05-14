import React, { useEffect, useState } from 'react'
import Product from './Product';
import Loading from './Loading';

const Products = () => {

    // Create Array of all Categories
    // const categoryArray = ["men's clothing", "women's clothing", "electronics", "jewelery"]

    const [isLoading, setIsLoading] = useState(true)
    const [ products, setProducts ] = useState([]);
   
      
    // Fetch Data from Fake Store API
    async function getProducts(){
        const url = `https://fakestoreapi.com/products`
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getProducts();
    }, [])

    
    return (
    <div className='container'> 
        {isLoading === true ? (<Loading />) : (
        <>
            <div className='ProductList'>
                {products?.map((product, id) => 
                    <div key={product.id}>
                        <Product 
                            product={product}                
                        />
                    </div>        
                )}
            </div>
        </>
        )}
    </div> 
    )
    
    
}

export default Products