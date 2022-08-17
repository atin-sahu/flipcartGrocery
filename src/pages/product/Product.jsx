import { border, Box, color, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { MdLocalOffer } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { RiRecycleLine } from "react-icons/ri";
import { AddToCart } from '../../components/AddToCart';

export const Product = () => {

  const [item,setItem] = useState({});
  const [hoverImgIdx,setHoverImgIdx] = useState(0);
  const  {key,id}   = useParams();
  console.log("key,id===>",key,id);

  useEffect(() => {
    getData();
  }, []);

  
  const getData = async () => {
    const data = await axios.get(`http://localhost:8080/${key}/${id}`)
    .then((data) => setItem(data.data));
  };
  console.log("setItem out",item);

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
      <Container  bgColor="white" maxW="container.2lg" py={8}>
        <Box display="flex" flexDirection={{base:"column", md:"row"}} gap={2}>

          <Box flex={{base:6,md:5}} >
            <Box display="flex" flexDirection={{base:"column-reverse", md:"row"}} justifyContent="center" >
              <Box  >
                <Box display="flex" flexDirection={{base:"row", md:"column"}} >
                  {
                    
                    item?.imgUrl?.map((im,idx)=>(
                       <Box _hover={{cursor:"pointer"}} onMouseEnter={()=>setHoverImgIdx(idx)} key={im} border="1px solid gray" w="80px" minH="80px" display="flex"  justifyContent="center" alignItems="center">
                        <Image maxH="60px" maxW="80%" src={im} />
                      </Box>
                    ))
                  }
                  
                </Box>

              </Box>

              <Box minH="250px" maxH="250px" minW="300px" maxW="300px" display="flex"   justifyContent="center" alignItems="center">
                <Image minW="40%" maxW="70%" maxH="230px" src={item?.imgUrl?.[hoverImgIdx]} />
              </Box>

            </Box>
            <Box m="auto" w="80%" align="center" mt={5} border="1px solid blue">
              <AddToCart Item={item}></AddToCart>
            </Box>
          </Box>

          <Box flex={{base:6,md:7}} >
            <Text fontWeight="semibold">{item.title}</Text>
            <Box display="flex" gap={2} my={1}>
              <Text fontWeight="semibold" fontSize="2xl" >₹ {item.price}</Text>
              <Box display="flex" gap={2} alignItems="end">
                <Text color="silver" as="del">₹ {item.old_price}</Text>
                <Text color="rgb(38,165,65)" fontWeight="semibold">{item.disscount}% off</Text>
              </Box>
            </Box>
            <Text fontWeight="semibold" my={5}>Available offers</Text >
            <Box my={2} >
              {
                item?.available_offers?.map((offer,index)=>{
                  return <Box key={index} display="flex" gap={2} my={1}>
                      <Box><MdLocalOffer color='green'></MdLocalOffer></Box>
                      <Text noOfLines={1} fontSize="sm">{offer}</Text>
                      <Text cursor="pointer" color="rgb(40,116,240)">T&C</Text> 
                    </Box>
                })
              }
            </Box>
            
            <Box display="flex" gap={2} my={4}>
              <Box mt={1}>
                <BsStopwatch></BsStopwatch>
              </Box>
              <Box>
                <Text color="red" fontWeight="semibold">Expiry Date {item.EXD}</Text>
                <Text color="green" fontWeight="semibold">Manufactured date {item.MFD}</Text>
              </Box>
            </Box>

            <Box display="flex"  my={5}>
              <Box flex={3}>
                <Text color="silver" fontWeight="semibold">Quantity</Text>
              </Box>
              <Box flex={9} display="flex" gap={2}>
                {
                  item?.qty?.map((q,index)=>{
                    return <Box _hover={{fontSize:"large", color:"green", border:"1px solid rgb(40,116,240)"}} cursor="pointer" key={index} display="flex" justifyContent="center" alignItems="center" h="50px" w="50px" border="1px solid green">
                      <Text fontWeight="semibold">{q}{item.unit}</Text>
                    </Box>
                  })
                }
              </Box>
            </Box>

            <Box display="flex"  my={5}>
              <Box flex={3}>
                <Text color="silver" fontWeight="semibold">Services</Text>
              </Box>
              <Box flex={9}>
                {
                  item?.services?.map((ser,index)=>{
                    return <Box key={index} display="flex" gap={3}>
                      {/* <Box display="flex" alignItems="center">
                        <RiRecycleLine></RiRecycleLine>
                      </Box> */}
                      <Text fontWeight="semibold" fontSize="sm">{ser}</Text>
                    </Box>
                  })
                }
              </Box>
            </Box>

            <Box display="flex" my={5}>
              <Box flex={3}>
                <Text color="silver" fontWeight="semibold">Seller</Text>
              </Box>
              <Box flex={9}>
                <Text fontWeight="semibold">{item.seller}</Text>
              </Box>
            </Box>

            <Box display="flex" my={5}>
              <Box flex={3}>
                <Text color="silver" fontWeight="semibold">Description</Text>
              </Box>
              <Box flex={9}>
                <Text fontSize="sm">{item.description}</Text>
              </Box>
            </Box>

          </Box>

        </Box>
      </Container>
    </Box>
  )
}