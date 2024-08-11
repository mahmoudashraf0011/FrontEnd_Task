import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Notify from '../Components/Notify'
import { useNavigate } from 'react-router-dom'
import baseURL from '../Components/API/BaseURL'

export default function RegisterHook() {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [userName,setUserName]=useState("")
    const [pass,setPass]=useState("")
    const [confirmPass,setConfirmPass]=useState("")
    const [load,setLoad]=useState(true)
    const navigate=useNavigate();

    const onChangeFname=(e)=>{
        setFname(e.target.value)
  
    }
    const onChangeLname=(e)=>{
        setLname(e.target.value)
    }
    const onChangePhone=(e)=>{
        setPhone(e.target.value)
    }
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangeUsername=(e)=>{
        setUserName(e.target.value)
    }
    const onChangePass=(e)=>{
        setPass(e.target.value)

    }
    const onChangeConfirmPass=(e)=>{
        setConfirmPass(e.target.value)
    
    }

    const validate=()=>{
       let  phonePattern=/^01[0-2,5]{1}[0-9]{8}$/;
       let emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
       let passPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


        if(fname==""||lname==""||phone==""||email==""||userName==""||pass==""){
            Notify("Please Complete Data!","warn");
            return;
        }
        else if(pass != confirmPass){
            Notify("The password confirmation does not match!","error");
            
        }
        if(phonePattern.test(phone)==false){
            Notify("The phone field must be a valid Egyptian phone number.","error");

        }
        if(emailPattern.test(email)==false){
            Notify("The email field must be a valid email address.","error");

        }
        if(passPattern.test(pass)==false){
            Notify("The password must contain at least one uppercase and one lowercase letter and The password must contain at least one symbol.","error");
        }
    }

        async function onHandleSubmit(e){
            e.preventDefault();
       
                setLoad(true)
                validate();
                try {
                    const res=await baseURL.post("/auth/register",{
                        first_name:fname,
                        last_name:lname,
                        phone:phone,
                        email:email,
                        username:userName,
                        password:pass,
                        password_confirmation:confirmPass
                    })
                   if(res.status==200){
                    Notify("User registered successfully.","success");
                    setTimeout(() => {
                        navigate("/")
                    }, 2000);
                   }
                    
                } catch (error) {
                    console.log(error);
                    if(error.response.data.message.email){
                        if(error.response.data.message.email[0].en=="The email has already been taken."){
                            Notify("The email has already been taken.","error");
                        }
                    }
                    if(error.response.data.message.phone){
                        if(error.response.data.message.phone[0].en=="The phone has already been taken."){
                            Notify("The phone Number has already been taken.","error");
                        }
                    }
                    if(error.response.data.message.username){
                        if(error.response.data.message.username[0].en=="The username has already been taken."){
                            Notify("The username has already been taken.","error");
                        }
                    }
  
                }
    

  
        }


        
  return [fname,lname,phone,email,pass,userName,confirmPass,onChangeFname,onChangeLname,onChangePhone,onChangeEmail,onChangeUsername,onChangePass,onChangeConfirmPass,onHandleSubmit]
}
