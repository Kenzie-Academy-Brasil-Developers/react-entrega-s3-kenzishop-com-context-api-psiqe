import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100%;
`
export const Cont = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items:center;
  justify-content: space-between;
  border-bottom: ${props=> props.borderBotton};
  h1{
    font-size: 23px;
  }

`

export const List = styled.div`
height: min-content;
margin: 20px;
display: flex;
flex-direction: row;
gap: 20px;
overflow: auto;
`
export const Btn= styled.div`
  border: none;
  margin: 15px;
  cursor: pointer;
`