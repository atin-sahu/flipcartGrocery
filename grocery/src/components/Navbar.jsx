import { Box, Image, Text, } from '@chakra-ui/react'
import React from 'react'
import { Search } from './Search'
// import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <Box w="100%" top={0} position="fixed" zIndex={2} bgColor="rgb(38,165,65)" maxH="50px" p={2}  alignItems="center" display="flex" gap={2} >
        <Box flex={3} display="flex" gap={2} alignItems="center" justifyContent="center">
            <Image width="auto" maxH="30px" src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"></Image>
            <Text as="cite" color="white" fontSize="2xl" letterSpacing={1} fontWeight="bold" >Grocery</Text>
        </Box>

        <Box flex={6} position="relative" top={0}>
            <Search></Search>
        </Box>

        <Box color='white' flex={3} letterSpacing={1} fontFamily="heading" fontWeight="bold" display="flex" flexDirection="row-reverse" justifyContent="space-evenly" alignItems="center">
            {/* <Box>
                <FaUser cursor="pointer" ></FaUser>
            </Box> */}
            <Box>
               <Link to="/register"><Text >New User</Text></Link>
            </Box>
            <Box>
                <Link to="/login"><Text >Login</Text></Link>
            </Box>
        </Box>

    </Box>
  )
}

