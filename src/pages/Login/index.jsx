import { Container, Cont, StyledButton } from "./styles";
import { Button } from "../../components/Button";


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { useHistory } from "react-router-dom";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { TextField } from "@mui/material";
import { toast } from 'react-toastify'


export const Login =({authentication, setAuthentication })=>{
  const history = useHistory()


  const homePage=()=>{ history.push('/' )}
  const signUpPage=()=>{ history.push('/signup')
}
  const schema = yup.object().shape({
    email: yup.string().required('Email is required!'),
    password: yup.string().required('Password is required!'),
  })

  const { 
    register,
    handleSubmit,
     formState:{errors},
  } = useForm({
    resolver:yupResolver(schema)
  });

  const onSubmit = ({email, password}) => {
    const users = JSON.parse(localStorage.getItem("@KenzieShop/users")) || [];
    const userLog = users.find(user => user.email === email)
    
    if(users.some((user) => user.email === email)){
      if(userLog.password === password){
        const upgradeUsers  = users.map( (user) => { 
          if(user.email === email){
        
        }
        return user
        });
        toast.success("Welcome, great purchases! 🥳")
        localStorage.setItem('@KenzieShop/userLog', JSON.stringify(userLog))
        localStorage.setItem('@KenzieShop/users', JSON.stringify(upgradeUsers))
        setAuthentication(true)
        history.push('/')
      }else{
        return toast.error('Invalid email or password !')
      }
    }else{
      toast.error('Invalid email or password !')
    }}  
    return(
    <>
      <Container>
        <Cont borderBotton='2px solid grey'>
          <h1> Kenzie Shop </h1>
          <Cont width='max-content'>
            <Button onClick={()=>{homePage()}}>
              <FiShoppingCart/>
              Home
            </Button>
            <Button onClick={()=>{signUpPage()}} 
            marginLeft='10px'
            marginRight='10px'>
              <FiLogIn/>
              SignUp
            </Button>
          </Cont>
        </Cont>

        <Cont fDirection='column'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField variant="standard" {...register('email')} label='Email' />
            {errors.email && <span className="errors"> {errors.email.message} </span>}
            
            <TextField  variant="standard" {...register('password')} label='Password' type='password' />
            {errors.password && <span className="errors"> {errors.password.message} </span>}
            
            <StyledButton variant="text" type="submit"> LOGIN </StyledButton>
          </form>  
        </Cont>
      </Container>
    </>
  )
}