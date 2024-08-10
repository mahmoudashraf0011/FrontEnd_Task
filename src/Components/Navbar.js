import React from 'react'
import logo from '../logo.svg'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Notify from './Notify';
export default function Navbar() {
  const navigate=useNavigate();
  let check=false
  let user={};
  if(localStorage.getItem("token")){
    check=true
  }
  if(localStorage.getItem("user")){
   user=JSON.parse(localStorage.getItem("user"))
   console.log(user);
  }

  const onChangeLogout=(e)=>{
    let confirm=window.confirm("Are you sure to Logout?");
    if(confirm==true){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
       Notify("User Logged out Successfully","success")
      setTimeout(() => {
        navigate("/")
      }, 2500);
    } 
  }
  return (
    <nav >
      <div className='logo'>
        <img src={logo}/>
      </div>

        {
        check?
        <ul>
          <li className='welcome'>Welcome <span>{user.username}!</span>  </li>
          <li className='logout' onClick={onChangeLogout}><Link to="#">Logout</Link></li>
          </ul>:
            <ul>
              <li><Link to="/">Sign IN</Link></li>
              <li><Link to="/auth/register">Sign UP</Link></li>         
            </ul>

        }


    </nav>
  )
}
