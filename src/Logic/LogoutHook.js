import React from 'react'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'
import axios from 'axios';

import Cookies from 'universal-cookie';

import Notify from '../Components/Notify';
import baseURL from '../Components/API/BaseURL';
export default function LogoutHook() {
    const navigate=useNavigate();
    const cookie=new Cookies();
    
    let check=false
    let user={};
    if(cookie.get("token")){
      check=true
    }
    if(localStorage.getItem("user")){
     user=JSON.parse(localStorage.getItem("user"))
    
    }
  
    async function onChangeLogout (e){
      const token=cookie.get("token")
      const confirm =window.confirm("Are You Sure To Logout From Your Account")
      if(confirm==true){
        await baseURL.post('/auth/logout',{}, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }).then(response => {
            if(response.status==200){
              cookie.remove("token");
              localStorage.removeItem("user");
              Notify("User Logged out Successfully","success")
              setTimeout(() => {
                navigate("/")
              }, 2500);
            }
          }).catch(error => {
            Notify("Please Try again later!","error")
          });
      }
  
  
   
  
       
    }
  return [check ,user,onChangeLogout]

}
