import loading from '../../img/spin.gif'
import { Container } from './styles'

export const Load=()=>{
  return(
    <Container>
      <img src={loading} alt='Loading'/>
    </Container>
  )

}