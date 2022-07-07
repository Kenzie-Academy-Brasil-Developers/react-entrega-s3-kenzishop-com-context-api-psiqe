import { Container } from "./styles"

export const Button=({
  children,
  onClick,
  id,
  backgroundColor,
  marginRight,
  marginLeft,
  width,
  ...rest })=>{
  
  return(
    <Container 
    width={width}
    marginRight={marginRight} 
    marginLeft={marginLeft} 
    backgroundColor={backgroundColor}
    onClick={onClick}
    >
      {children}
    </Container>
  )
}