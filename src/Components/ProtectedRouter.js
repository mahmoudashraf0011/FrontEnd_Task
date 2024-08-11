import React, { useState } from 'react'
import { Navigate} from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function ProtectedRouter({children}) {
    const cookie=new Cookies();
    const [isUser,setIsUser]=useState(cookie.get("token"))
    if ( !isUser){
        return <Navigate to="/" replace />
    }
  return children
}
