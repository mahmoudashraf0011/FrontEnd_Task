import React, { useEffect, useState } from 'react'
import Notify from '../Components/Notify'
import { json, useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseURL from '../Components/API/BaseURL'
import Cookies from 'universal-cookie'

export default function LoginHook() {
    const [userName,setUserName]=useState("")
    const [pass,setPass]=useState("")
    const navigate=useNavigate();
    const cookie=new Cookies();

    const onChangeUsername=(e)=>{
        setUserName(e.target.value)
    }
    const onChangePass=(e)=>{
        setPass(e.target.value)

    }

    const validate=()=>{
 
         if(userName==""||pass==""){
             Notify("Please Complete Data!","warn");
             return;
         }
     }
    async function onHandleSubmit(e){
        e.preventDefault();
        validate()
        try {
            const res=await baseURL.post("/auth/login",{
                        username:userName,
                        password:pass,
                    })
              
            if(res.status==200){
            
                cookie.set("token",res.data.data.accessToken)
                localStorage.setItem("user",JSON.stringify(res.data.data.user))
                Notify("User Logged in successfully.","success");
                setTimeout(() => {
                    navigate("/profile")
                }, 2000);
        
            }
        } catch (error) {
            if(error.response){
                if(error.response.status==401){
                    Notify("Invalid Email or Password!","error");
                }
            }

        }
            setUserName("");
            setPass("");

    }
  return [userName,pass,onChangeUsername,onChangePass,onHandleSubmit]
}
