import { Btn, Cont, Container, List } from "./styles"
import { Card } from "../../components/Card"

import { FiShoppingCart, FiLogIn } from 'react-icons/fi'
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify'
import { useContext } from "react"
import { CartContext } from "../../Providers/Cart"

export const Cart   = ({authentication})=>{  
  const history     = useHistory()
  const { cart } = useContext(CartContext)
  
  const returnHome=()=>{ history.push('/' )}
  const finish=()=>{
    authentication ? (
      history.push('/congratulations')
    ):(
      toast.warning('Please, login to your account!') &&
      history.push('/login')
    )
   }

  return(
    <Container>
       <Cont borderBotton='2px solid grey'>
        <h1> Kenzie Shop </h1>
        <Cont width='max-content'>
          <Btn>
                <FiShoppingCart/>
            Carrinho
          </Btn>
          <Btn onClick={()=>{returnHome()}}marginLeft='10px' marginRight='10px'>
                <FiLogIn/>
            Home
          </Btn>
        </Cont>
      </Cont>
      <List>
        {cart.map((elem,i)=>{
          return(
            <Card key={i} isRemovable={true} elem={elem} text='REMOVE'/>
          )
        })}
      </List>
      <Cont>
        <Cont fDirection='column' height='100%' bottom='10px' color='#fbc531' width='100%'>
          <Cont width='100%'>
            <h4> Quantidade: {cart.length}  </h4>
            <span>R${cart.reduce((previusValue, cart) =>previusValue + cart.price,0)} </span>
          </Cont>
          <Btn padding='10px' bColor='#f39c12' onClick={()=>finish()} > FINALIZAR PEDIDO </Btn>
        </Cont>
      </Cont>
    </Container>    
  )
}