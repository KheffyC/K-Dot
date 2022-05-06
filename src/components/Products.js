import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import Toggle from './Toggle';

const Products = () => {

    // Create Array of all Categories
    // const categoryArray = ["men's clothing", "women's clothing", "electronics", "jewelery"]

    const [isLoading, setIsLoading] = useState(false)
    const [ products, setProducts ] = useState([]);
    const [ checkedOne, setCheckedOne ] = useState(false)
    const [ checkedTwo, setCheckedTwo ] = useState(false)
    const [ checkedThree, setCheckedThree ] = useState(false)
    const [ checkedFour, setCheckedFour ] = useState(false)
    const [ checkedArray, setCheckedArray ] = useState([])

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
      };
    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
      };
    const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
      };
    const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
      };
   
      
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
      <div className='FilterNav'>
        <h2>FILTER </h2>
        <ul>
            <Toggle 
                products = {products}
                title = "men's"
                value = {checkedOne}
                handleChange = {handleChangeOne}
             />
            <Toggle 
                products = {products}
                title = "women's"
                value = {checkedTwo}
                handleChange = {handleChangeTwo}
             />
            <Toggle 
                products = {products}
                title = "electronics"
                value = {checkedThree}
                handleChange = {handleChangeThree}
             />
            <Toggle 
                products = {products}
                title = "jewelery"
                value = {checkedFour}
                handleChange = {handleChangeFour}
             />
            
        </ul>
    </div>
        <div className='ProductList'>
            {products?.map((product, id) => 
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