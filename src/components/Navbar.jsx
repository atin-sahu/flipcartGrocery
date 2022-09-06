import { Box, Image, Text, } from '@chakra-ui/react'
import React from 'react'
import { Search } from './Search'
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/auth/action';

export const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((store)=>(store.authReducer.auth));
    const user = useSelector((store)=>(store.authReducer.user));
    const count = useSelector((store)=>(store.cartReducer.count));
    localStorage.setItem("carCount",JSON.stringify(count));
    console.log("navbar isAuth", isAuth);

  return (
    <Box w="100%" top={0} position="fixed" zIndex={2} bgColor="rgb(38,165,65)" maxH="50px" p={2}  alignItems="center" display="flex" gap={2} >
        <Box flex={3}>
            <Link to="/">
                <Box  display="flex" gap={2} alignItems="center" justifyContent="center">
                    <Image width="auto" maxH="30px" src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"></Image>
                    <Text as="cite" color="white" fontSize="2xl" letterSpacing={1} fontWeight="bold" >Grocery</Text>
                </Box>
            </Link>
        </Box>
        

        <Box flex={6} position="relative" top={0}>
            <Search ></Search>
        </Box>

        <Box color='white' flex={3} letterSpacing={1} fontFamily="heading" fontWeight="bold" >
            {isAuth ? (
                <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box cursor="pointer" onClick={()=>dispatch(signOut())}>
                        <FiLogOut fontSize="20px"></FiLogOut>
                        <Text fontSize="xs" fontWeight="hairline">Logout</Text>
                    </Box>
                    <Link to="/cart">
                        <Box display="flex" alignItems="center" position="relative">
                            <Box fontSize="4xl">
                                <FaShoppingCart></FaShoppingCart>
                            </Box>
                            <Box position="absolute" left={3} bottom={3} h="20px" w="20px" rounded="full" display="flex" justifyContent="center" alignItems="center">
                                <Text textColor="black">{count}</Text>
                            </Box>
                        </Box>
                    </Link>
                    <Box  cursor="pointer" display="flex" gap={1} alignItems="center">
                        <Text fontWeight="light">Hi! {user}</Text>
                        <Box backgroundColor="#155e07" h="30px" w="30px" rounded="full" display="flex" justifyContent="center" alignItems="center">
                            <FaUser></FaUser>
                        </Box>
                    </Box>
                </Box>
            ):(
                <Box display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
                    <Box>
                        <Link to="/register"><Text >New User</Text></Link>
                    </Box>
                    <Box>
                        <Link to="/login"><Text >Login</Text></Link>
                    </Box>
                </Box>
            )}
            
        </Box>

    </Box>
  )
}

