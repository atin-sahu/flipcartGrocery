import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Cart = () => {

  const [items,setItems] = useState([]);
  const [MRP, setMRP] = useState(0);
  const [off, setOff] = useState(0);

  const getCartData = async()=>{
    let data = await axios.get("http://localhost:8080/cart")
    .then(data => data.data);
    let MRP = data.reduce((acc,curr)=>acc+curr.old_price,0);
    console.log("MRP",MRP);
    setMRP(MRP);
    let off = data.reduce((acc,curr)=>acc+(curr.old_price/100)*curr.disscount,0);
    console.log("off",off);
    setOff(off);
    setItems(data);
  }
  console.log("items",items);
  

  const deleteCartItem = async(id)=>{
     await axios.delete(`http://localhost:8080/cart/${id}`);
     getCartData();
  }


  useEffect(()=>{
    getCartData();
  },[])

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
      {items.length ? (
        <Box p={2} display="flex" flexDirection={{base:"column", md:"row"}} gap={5}>
          <Box flex={{base:"12",md:"8"}}  p={2}>
            <Text  my={5} align="center" fontWeight="semibold">YOUR ITEM's</Text>
            {items.map((item)=>{
              return <Box key={item.id} >
                  <Box display="flex"  gap={2} _hover={{bgColor:"silver"}} p={2}>
                    <Box flex={9} display="flex" gap={2} >
                      <Box display="flex" alignItems="center" justifyContent="center" flex={3} p={2} >
                        <Image maxH="100px" maxW="70%" src={item.imgUrl[0]}></Image>
                      </Box>
                      <Box p={2} flex={9}>
                        <Text fontWeight="semibold">{item.title}</Text>
                        <Text>{item.unit}</Text>
                        <Box display="flex" gap={5} pt={4} alignItems="center">
                          {/* <Text fontWeight="semibold" fontSize="2xl">₹{item.price}</Text> */}
                          <Text fontWeight="semibold" fontSize="2xl">₹{item.old_price-(item.old_price)/100*item.disscount}</Text>
                          <Text as="del" >₹{item.old_price}</Text>
                          {/* <Text color="green">{item.disscount} off</Text> */}
                          <Text color="green">₹{(item.old_price)/100*item.disscount} off</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box flex={3} >
                      <Box border="1px solid black" borderRadius={5} align="center" mt={4}>
                        <Button onClick={()=>deleteCartItem(item.id)} variant="unstyled" rightIcon={<DeleteIcon></DeleteIcon>}>Remove</Button>
                      </Box>
                    </Box>
                  </Box>
                  <Divider orientation='horizontal' />
              </Box>
            })}
          </Box>
          <Box p={2} flex={{base:"12",md:"4"}}  >
            <Text my={5} align="center" fontWeight="semibold">PRICE DETAILS</Text>
            <Box border="1px solid black">
              <Box display="flex" p={2} gap={2} justifyContent="space-between">
                <Text >MRP ({items.length} Items) </Text>
                <Text fontWeight="semibold">₹{MRP}</Text>
              </Box>
              <Box display="flex" b p={2} gap={2} justifyContent="space-between">
                <Text >Product Discount</Text>
                <Text fontWeight="semibold" color="green">₹{off}</Text>
              </Box>
              <Box display="flex" p={2} gap={2} justifyContent="space-between">
                <Text >Delivery Fee</Text>
                <Text fontWeight="semibold" color="red">₹ 49</Text>
              </Box>
              <Divider my={2} variant="dashed" colorScheme="blackAlpha"></Divider>
              <Box display="flex" p={2} gap={2} justifyContent="space-between">
                <Text >Total</Text>
                <Text fontWeight="semibold" color="green">₹ {MRP-off+49}</Text>
              </Box>
            </Box>
          </Box>
        </Box> ) : (
          <Box bgColor="white" m="auto">
            <Text>Your cart is Empty</Text>
          </Box>
        )}
    </Box>
  )
}
