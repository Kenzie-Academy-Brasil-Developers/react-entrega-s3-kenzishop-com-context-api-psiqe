import styled from "styled-components";
import { Button } from '@mui/material/'
import * as muiStyles from '@mui/material/styles';

export const Container = styled.div`
height: 100vh;
width: 100%;
`
export const Cont = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: ${props => props.fDirection ? props.fDirection : 'row'};
  margin: 10px;
  align-items:center;
  justify-content: space-between;
  border-bottom: ${props=> props.borderBotton};
  h1{
    font-size: 23px;
  }
  form{
    display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--grey-3);
  padding: 17px 15px;
  border-radius:5px;
  gap:20px;
  }

`
export const StyledButton = muiStyles.styled(Button)`
color: #f39c12;
`