import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHook from '../../Logic/LoginHook'
import { ToastContainer } from 'react-toastify';
import Cookies from 'universal-cookie';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

export default function Login() {
 const [userName,pass,onChangeUsername,onChangePass,onHandleSubmit]=LoginHook();
  const navigate=useNavigate();
  const cookie=new Cookies();
 useEffect(()=>{
  if(cookie.get("token")){
    navigate("/profile")
    window.location.reload();
   }
 },[])

  return (

      <div className='login auth'> 
        <h2 className='loginTitle'>sign in</h2>
        <FormControl className='loginForm'>
            <TextField  variant='standard' className='loginForm_username input' type='text'  placeholder='Enter username...' value={userName} onChange={onChangeUsername}/>
            <TextField  variant='standard' className='loginForm_pass input' type='password' placeholder='Enter Password...' value={pass} onChange={onChangePass}/>
            <Button className='loginForm_btn'  type='submit' onClick={onHandleSubmit} >Submit</Button>
        </FormControl>
        <p className='loginHint'>Register Now : <Link to="/auth/register">Register</Link></p>
        <ToastContainer />
      </div>
  
  )
}
