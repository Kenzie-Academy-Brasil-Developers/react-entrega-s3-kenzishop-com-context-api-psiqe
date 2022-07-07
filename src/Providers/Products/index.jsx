import { createContext, useState } from "react";
import { Products } from "../../data/Products";

export const ProductsContext = createContext()

export const ProductsProvider = ({children})=>{
  const defaultState = Products
  const [productData, setProductData] = useState(defaultState)

  const addProduct = (prod)=>{
    setProductData(...productData, prod)
  }

  return(
    <ProductsContext.Provider value={{productData, addProduct}}>
      {children}
    </ProductsContext.Provider>
  )

}