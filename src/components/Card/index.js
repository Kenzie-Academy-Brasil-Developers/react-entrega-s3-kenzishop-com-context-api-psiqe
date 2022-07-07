import { Cont, Image, Line } from "./styles"
import { Button } from "../Button"

import { toast } from 'react-toastify'
import { Children, useContext } from "react"
import { CartContext } from "../../Providers/Cart"


export const Card = ({elem, isRemovable = false, text}) => {
const {cart, addProduct, subProduct } = useContext(CartContext) 
  
  function Cart(elem){
    if(isRemovable === false){
      if(elem.quantity > 0){
        addProduct(elem)
        //dispatch(addCarThunk(elem))
       }else{
        toast.warning('Out of stock. we will have more soon!')
    }}else{
      subProduct(elem,elem.id)
      //dispatch(removeCartThunk(elem.id))
    }
  }

  return(
    <Line>
      <Cont>
        <Image src={elem.image} alt="#" />
        <h4> {elem.name} </h4>
        <span> R${elem.price} </span>
        <Button 
          onClick={()=> Cart(elem)}
          id={elem.id}
          width='120px' 
          marginLeft='10px' 
          backgroundColor='rgb(249, 202, 36)'>
            {text}
        </Button>
      </Cont>
    </Line>
  )
}