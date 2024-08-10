import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginHook from '../../Logic/LoginHook'
import { ToastContainer } from 'react-toastify';

export default function Login() {
 const [userName,pass,onChangeUsername,onChangePass,onHandleSubmit]=LoginHook();
  const navigate=useNavigate();

 useEffect(()=>{
  if(localStorage.getItem("token")){
    navigate("/#//profile")
   }
 },[])

  return (

      <div className='login auth'> 
        <h2 className='loginTitle'>sign in</h2>
        <form className='loginForm'>
            <input className='loginForm_username' type='text' placeholder='Enter username...' value={userName} onChange={onChangeUsername}/>
            <input className='loginForm_pass' type='password' placeholder='Enter Password...' value={pass} onChange={onChangePass}/>
            <button className='loginForm_btn'  type='submit' onClick={onHandleSubmit} >Submit</button>
        </form>
        <p className='loginHint'>Register Now : <Link to="/auth/register">Register</Link></p>
        <ToastContainer />
      </div>
  
  )
}
