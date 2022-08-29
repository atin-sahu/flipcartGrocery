import { Box, Button, Text } from '@chakra-ui/react';
import  axios  from 'axios';
import React from 'react'

export const AddToCart = ({Item}) => {
    // console.log("addtocartcomponent",Item)

    const setToCart = async (cartItem)=>{
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
          alert("Item Already Added To Card");
        }
        let cartProduct = await axios.post(`http://localhost:5000/carts`,cartItem)
        .then((cartProduct)=>cartProduct.data);
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
