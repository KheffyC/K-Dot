import { createContext, useState } from 'react'

export const ProductContext = createContext({})

const ProductProvider = ({children}) => {

    const [clickedProduct, setClickedProduct] = useState({});
    const [productArray, setProductArray] = useState({});

  return (
    <ProductContext.Provider value={{clickedProduct, setClickedProduct, productArray, setProductArray}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider