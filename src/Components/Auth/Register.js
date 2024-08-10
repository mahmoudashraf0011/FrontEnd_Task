import React from 'react'
import { Link } from 'react-router-dom'
import RegisterHook from '../../Logic/RegisterHook';
import { ToastContainer, toast } from 'react-toastify';
export default function Register() {
  const [fname,lname,phone,email,pass,userName,confirmPass,onChangeFname,onChangeLname,onChangePhone,onChangeEmail,onChangeUsername,onChangePass,onChangeConfirmPass,onHandleSubmit]=RegisterHook();
  return (
    <div className='register auth'> 
      <h2 className='loginTitle'>sign up</h2>
      <form className='loginForm'>
          <input className='loginForm_firstName' type='text' placeholder='Enter firstName...' onChange={onChangeFname} value={fname}/>
          <input className='loginForm_lastName' type='text' placeholder='Enter lastName...' onChange={onChangeLname} value={lname}/>
          <input className='loginForm_phone' type='phone' placeholder='Enter Phone Number...' onChange={onChangePhone} value={phone}/>
          <input className='loginForm_email' type='email' placeholder='Enter Email...' onChange={onChangeEmail} value={email}/>
          <input className='loginForm_username' type='text' placeholder='Enter Username...' onChange={onChangeUsername} value={userName}/>
          <input className='loginForm_pass' type='password' placeholder='Enter Password...' onChange={onChangePass} value={pass}/>
          <input className='loginForm_confirmPass' type='password' placeholder='Enter Confirmation of Password...' onChange={onChangeConfirmPass} value={confirmPass}/>
          <button className='loginForm_btn'  type='submit' onClick={onHandleSubmit}>Submit</button>
      </form>
      <p className='loginHint'>Login Now : <Link to="/">Login</Link></p>
      <ToastContainer />
  </div>
  )
}
