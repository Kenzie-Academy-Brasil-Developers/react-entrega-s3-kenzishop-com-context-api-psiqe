import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{
  const defaultState = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []
  const [cart, setCart] = useState(defaultState)
  
  useEffect(()=>{
    localStorage.setItem("@KenzieShop:cart", JSON.stringify(cart))
  }, [cart])

  const addProduct = (prod) => {
    setCart([...cart, prod]);
  };

  const subProduct = (elem, id) => {
    const index = cart.indexOf(elem)
    console.log(index)
    console.log(cart)
   
    const delProduct = cart.splice(index, 1)
    console.log(cart)
    console.log(delProduct)

 
    setCart([...cart])
}

  return(
    <CartContext.Provider value={{cart, addProduct, subProduct}}>
      {children}
    </CartContext.Provider>
  )
}