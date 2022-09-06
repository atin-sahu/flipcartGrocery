import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
export const AuthWrapper = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token") || false);
    if(!token){
        return <Navigate to='/login'></Navigate>
    }
  return (
    <Box>
        {children}
    </Box>
  )
}
