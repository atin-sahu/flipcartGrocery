import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const AuthWrapper = ({children}) => {
    const isAuth = useSelector((store)=>store.authReducer.auth);
    console.log("authwrapper isAuth", isAuth);
    if(!isAuth){
        return <Navigate to='/login'></Navigate>
    }
  return (
    <Box>
        {children}
    </Box>
  )
}
