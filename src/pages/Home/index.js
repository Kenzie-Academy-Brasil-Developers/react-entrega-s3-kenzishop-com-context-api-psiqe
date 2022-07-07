import { Container, Cont, List, Btn } from "./styles"
import { Card } from "../../components/Card"
import { FiShoppingCart, FiLogIn } from 'react-icons/fi'
import { useHistory } from "react-router-dom"
import { useContext } from "react"
import { ProductsContext } from "../../Providers/Products"

export const Home     = ({authentication,setAuthentication})=>{
  const history       = useHistory()
  const {productData} = useContext(ProductsContext)

  
  const opemCart  =()=>{ history.push('/cart' )}
  const loginPage =()=>{ history.push('/login' )}
  const logout    =()=>{ 
    localStorage.removeItem('@KenzieShop/userLog')
    localStorage.removeItem('@KenzieShop/cart')
    setAuthentication(false)
    history.push('/login')
  }

  return (
    <Container>
      <Cont borderBotton='2px solid grey'>
        <h1> Kenzie Shop </h1>
        <Cont width='max-content'>
          <Btn onClick={()=>{opemCart()}}>
            <FiShoppingCart/>
            Carrinho
          </Btn>
          {authentication ? (
            <Btn onClick={()=>{logout()}} 
            marginLeft='10px'
            marginRight='10px'>
            <FiLogIn/>
            Logout
          </Btn>
            ):(
              <Btn onClick={()=>{loginPage()}} 
            marginLeft='10px'
            marginRight='10px'>
              <FiLogIn/>
              Login
            </Btn>
            )}
        </Cont>

      </Cont>
        <List>
          {productData.map((elem,i)=>(
            <Card key={i} elem={elem} text="ADD"/>
          ))}
        </List>
        {}
    </Container>
  )
}