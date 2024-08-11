import React from 'react'
import { Link } from 'react-router-dom'
import RegisterHook from '../../Logic/RegisterHook';
import { ToastContainer, toast } from 'react-toastify';
import TextField   from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
export default function Register() {
  const [fname,lname,phone,email,pass,userName,confirmPass,onChangeFname,onChangeLname,onChangePhone,onChangeEmail,onChangeUsername,onChangePass,onChangeConfirmPass,onHandleSubmit]=RegisterHook();
  return (
    <div className='register auth'> 
      <h2 className='loginTitle'>sign up</h2>
      <FormControl className='loginForm'>
          <TextField  variant='standard' className='loginForm_firstName input' type='text' placeholder='Enter firstName...' onChange={onChangeFname} value={fname}/>
          <TextField  variant='standard' className='loginForm_lastName input' type='text' placeholder='Enter lastName...' onChange={onChangeLname} value={lname}/>
          <TextField  variant='standard' className='loginForm_phone input' type='phone' placeholder='Enter Phone Number...' onChange={onChangePhone} value={phone}/>
          <TextField  variant='standard' className='loginForm_email input' type='email' placeholder='Enter Email...' onChange={onChangeEmail} value={email}/>
          <TextField  variant='standard' className='loginForm_username input' type='text' placeholder='Enter Username...' onChange={onChangeUsername} value={userName}/>
          <TextField  variant='standard' className='loginForm_pass input' type='password' placeholder='Enter Password...' onChange={onChangePass} value={pass}/>
          <TextField  variant='standard' className='loginForm_confirmPass input' type='password' placeholder='Confirm the Password...' onChange={onChangeConfirmPass} value={confirmPass}/>
          <Button className='loginForm_btn'  type='submit' onClick={onHandleSubmit}>Submit</Button>
      </FormControl>
      <p className='loginHint'>Login Now : <Link to="/">Login</Link></p>
      <ToastContainer />
  </div>
  )
}
