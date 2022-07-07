import { useEffect, useState } from 'react'
import { Switch, Route} from 'react-router-dom'
import { Cart } from '../pages/Cart'
import Congratulations from '../pages/Congratulations'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
export const Routes = ()=>{
  const [authentication, setAuthentication] = useState(false)


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('@KenzieShop/userLog'))
    
    if(user){
      setAuthentication(true)
    }
  }, [authentication])
  return(
    <Switch>
      <Route exact path='/'>
        <Home authentication={authentication}
        setAuthentication={setAuthentication}/>
      </Route>
      <Route exact path='/cart'>
        <Cart authentication={authentication}/>
      </Route>
      <Route exact path='/signup'>
        <Signup authentication={authentication}/>
      </Route>
      <Route exact path='/login'>
        <Login 
        authentication={authentication}
        setAuthentication={setAuthentication}/>
      </Route>
      <Route exact path='/congratulations'>
        <Congratulations/>
      </Route>
    </Switch>
  )
}