import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Cart = () => {

  const [items,setItems] = useState([]);

  const getCartData = async()=>{
    let data = await axios.get("http://localhost:8080/cart")
    .then(data => setItems(data.data));
  }
  console.log("cartData",items);

  useEffect(()=>{
    getCartData();
  },[])

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
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
                          <Text fontWeight="semibold" fontSize="2xl">₹{item.price}</Text>
                          <Text as="del" >₹{item.old_price}</Text>
                          <Text color="green">{item.disscount} off</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box flex={3} >
                      <Box border="1px solid black" borderRadius={5} align="center" mt={4}>
                        <Button variant="unstyled" rightIcon={<DeleteIcon></DeleteIcon>}>Remove</Button>
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
                <Text fontWeight="semibold">₹{}</Text>
              </Box>
              <Box display="flex" b p={2} gap={2} justifyContent="space-between">
                <Text >Product Discount</Text>
                <Text fontWeight="semibold" color="green">₹{}</Text>
              </Box>
              <Box display="flex" p={2} gap={2} justifyContent="space-between">
                <Text >Delivery Fee</Text>
                <Text fontWeight="semibold" color="red">₹ 49</Text>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}
