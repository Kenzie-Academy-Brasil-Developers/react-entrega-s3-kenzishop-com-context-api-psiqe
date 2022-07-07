import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100%;
display:flex;
flex-direction: column;
`

export const Cont = styled.div`
  width: ${props => props.width};
  display: flex;
  margin: 0 10px;
  height: ${props => props.height ? props.height : null};
  padding: 10px 10px 0px  10px;
  flex-direction: ${props => props.fDirection ? props.fDirection : 'row' };
  align-items:center;
  justify-content: space-between;
  border-bottom: ${props=> props.borderBotton};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${props => props.color ? props.color : null };
  bottom: ${props => props.bottom ? props.bottom : null };
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
  padding: ${props=>props.padding ? props.padding : null};
  cursor: pointer;
  color: black;
  border-radius: 5px;
  background-color: ${props => props.bColor ? props.bColor : null};
`