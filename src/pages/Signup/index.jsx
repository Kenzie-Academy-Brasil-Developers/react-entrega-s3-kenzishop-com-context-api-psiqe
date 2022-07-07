import { Container, Cont, StyledButton } from "./styles";
import { Button } from "../../components/Button";

import { TextField } from "@mui/material";

import { useForm } from "react-hook-form";
import {yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Users from "../../data/users";
import { toast } from 'react-toastify';

export const Signup =()=>{
  const history = useHistory()
  const homePage = ()=>{
    history.push('/')
  }
  const loginPage = ()=>{
    history.push('/login')
  }
  const schema = yup.object().shape({
    name: yup.string().required("We need know your name!"),
    email: yup.string().required('We need know your email!').email('Invalid email!'),
    password: yup.string()
      .required("You need security, create a password!")
      .matches("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,}$", 'Password must contain at least: 1 Upper case, 1 Lower case, 1 Number, 1 Special character and at least 6 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Does not agree with password!')
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSignup = ({name, email, password, cart = [] })=>{
    const user = {name, email, password, cart}
    if(Users.some((user) => user.email === email)) {
      toast.error('This email is already being used !')
     }else{
      toast.success('Welcome to Kenzie Shop !')
      history.push('/login')
      Users.push(user)
      localStorage.setItem("@KenzieShop/users", JSON.stringify(Users))
  }
    
  }

 
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
            <Button onClick={()=>{loginPage()}} 
            marginLeft='10px'
            marginRight='10px'>
              <FiLogIn/>
              Login
            </Button>
          </Cont>
        </Cont>

        <Cont fDirection='column'>
          <form onSubmit={handleSubmit(onSignup)}>
            <TextField {...register('name')} label='Name' error={errors?.name?.message}  />
            {errors.name && <span className="errors"> {errors.name.message}</span>}
            <TextField  {...register('email')} label='Email' error={errors?.email?.message} />
            {errors.email && <span className="errors"> {errors.email.message}</span>}
            <TextField {...register('password')} label='Password' error={errors?.password?.message} type='password' />
            {errors.password && <span className="errors"> {errors.password.message}</span>}
            <TextField name='confirmPassword' {...register('confirmPassword')} label='Confirm password' error={errors?.confirmPassword?.message} type='password'/>
            {errors.confirmPassword && <span className="errors"> {errors.confirmPassword.message}</span>}
            <StyledButton type="submit" variant="text" > SIGNUP </StyledButton>
          </form>
        </Cont>
      </Container>



    </>
  )
}