import { Box, Divider, Image, Text } from '@chakra-ui/react'
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
          <Box flex={{base:"12",md:"8"}}  border="1px solid black" p={2}>
            <Text  my={5} align="center" fontWeight="semibold">Your Items</Text>
            {items.map((item)=>{
              return <Box key={item.id} >
                  <Box display="flex" p={2}  justifyContent="space-between">
                    <Box display="flex" p={1} gap={2} border="1px solid green">
                      <Box flex={3} border="1px solid red">
                        <Image minW="70%" maxH="100px" maxW="70%" src={item.imgUrl[0]}></Image>
                      </Box>
                      <Box flex={9} border="1px solid red">
                        right
                      </Box>
                    </Box>
                    <Box border="1px solid green">
                      right
                    </Box>
                  </Box>
                  <Divider orientation='horizontal' />
              </Box>
            })}
          </Box>
          <Box p={2} flex={{base:"12",md:"4"}} border="1px solid black">
            <Text my={5} align="center" fontWeight="semibold">Your Items</Text>
          </Box>
        </Box>
    </Box>
  )
}
