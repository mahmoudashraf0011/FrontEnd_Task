import React from 'react'
import logo from '../logo.svg'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Notify from './Notify';
import Cookies from 'universal-cookie';
import baseURL from './API/BaseURL';
import LogoutHook from '../Logic/LogoutHook';
export default function Navbar() {
const [check ,user,onChangeLogout]=LogoutHook();
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
