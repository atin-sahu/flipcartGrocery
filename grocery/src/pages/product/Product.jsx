import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';


export const Product = () => {
  const [item,setItem] = useState({});
  // const [imgIndex,setImgIndex] = useState(0);
  const  { id }  = useParams();
  

  useEffect(() => {
    getData();
  }, []);

  
  const getData = async () => {
    const data = await axios.get(`http://localhost:8080/products/${id}`)
    .then((data) => setItem(data.data))
    // console.log("single product",data);
    console.log("setItem in",item);
  };
  
  console.log("setItem out",item);

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
      <Container  bgColor="white" maxW="container.2lg" py={2}>
        <Box display="flex" flexDirection={{base:"column", md:"row"}} gap={2}>

          <Box flex={{base:6,md:5}} >
            <Box display="flex" flexDirection={{base:"column-reverse", md:"row"}} >
              <Box flex={{base:6,md:3}} >
                <Box display="flex" flexDirection={{base:"row", md:"column"}} >
                  {
                    
                    item?.imgUrl?.map((im)=>(
                       <Box key={im} border="1px solid gray" minW="100px" minH="100px" display="flex"  justifyContent="center" alignItems="center">
                        <Image maxH="80px" maxW="80%" src={im} />
                      </Box>
                    ))
                  }
                  
                </Box>

              </Box>

              <Box minH="250px" minW="250px" display="flex" flex={{base:6,md:9}} border="1px solid gray" justifyContent="center" alignItems="center">
              <Image src="" />
              </Box>

            </Box>
          </Box>

          <Box flex={{base:6,md:7}} border="1px solid yellow">

          </Box>

        </Box>
      </Container>
    </Box>
  )
}