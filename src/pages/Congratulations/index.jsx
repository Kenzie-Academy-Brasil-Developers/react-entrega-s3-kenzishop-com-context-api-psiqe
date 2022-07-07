import {Container, Cont, Btn} from './styles'

import { FiShoppingCart, FiLogIn } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

const Congratulations = () => {
  const history         = useHistory()

  const opemCart =()=>  { history.push('/cart' )}
  const returnHome=()=> { history.push('/' )}

  return(
    <Container>
      <Cont borderBotton='2px solid grey'>
        <h1> Kenzie Shop </h1>
        <Cont width='max-content'>
          <Btn onClick={()=>{opemCart()}}>
            <FiShoppingCart/>
            Carrinho
          </Btn>
          <Btn onClick={()=>{returnHome()}}marginLeft='10px' marginRight='10px'>
            <FiLogIn/>
            Home
          </Btn>
        </Cont>
      </Cont>
      <h2>Manda o pix cumpadi ! 🤡 ksksk </h2>
    
    </Container>
  )
}

export default Congratulations