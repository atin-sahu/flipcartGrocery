import { Box, Button, Text } from '@chakra-ui/react';
import  axios  from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { cartCount } from '../redux/cart/action';

export const AddToCart = ({Item}) => {

    const isAuth = useSelector((store)=>(store.authReducer.auth));
    // console.log("isauth addtocart",isAuth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const setToCart = async (cartItem)=>{
      if(!isAuth){
        return navigate("/login")
      }
       
        let cartData = await axios.get("http://localhost:5000/carts")
        .then((cartData)=>cartData.data);
        let flag = false;
        let isPresent = cartData.map((item)=>{
          if(item.id == cartItem.id){
            flag = true;
            return
          }
        })
        if(flag){
          return alert("Item Already Added To Card");
        }
        let cartProduct = await axios.post(`http://localhost:5000/carts`,cartItem)
        .then((cartProduct)=>cartProduct.data);
        dispatch(cartCount());
        alert("Item Added Successfull")
      }

  return (
    <Box>
        <Button w="100%" onClick={()=>setToCart(Item)}  variant="unstyled"  size="sm">
            <Text color="rgb(40,116,240)">Add Item</Text>
        </Button>
    </Box>
  )
}
