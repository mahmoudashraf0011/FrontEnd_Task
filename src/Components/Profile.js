import React from 'react'
import avatar from '../avatar.png'
import { ToastContainer } from 'react-toastify';
export default function Profile() {
  let user={};
  if(localStorage.getItem("user")){
    user=JSON.parse(localStorage.getItem("user"))
   }
  return (
    <div className=' profile'>

      <div className='container'>
          <h2 className='profileHeader'>Account Information</h2>
          <div className='profileContent'>
            <div className='profileImg'>
              <img src={avatar} />
            </div>
            <div className='profileInfo'>
              <p>First Name : <span> {user.firstName}</span></p>
              <p>Last Name : <span> {user.lastName}</span></p>
              <p>UserName : <span> {user.username}</span></p>
              <p>Email : <span> {user.originalEmail.email}</span></p>
              <p>Phone : <span> {user.phone}</span></p>
            </div>

          </div>
        <ToastContainer />
        </div>   
    </div>
  )
}
