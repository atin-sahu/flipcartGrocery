import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';


export const Product = () => {

  const [item,setItem] = useState({});
  console.log("item?.imgUrl?.[0]",item?.imgUrl?.[0]);
  const [hoverImgUrl,setHoverImgUrl] = useState(`${item?.imgUrl?.[0]}`);
  const  { id }  = useParams();
  console.log("hoverImgUrl",hoverImgUrl);

  useEffect(() => {
    getData();
  }, []);

  
  const getData = async () => {
    const data = await axios.get(`http://localhost:8080/products/${id}`)
    .then((data) => setItem(data.data))
  };
  console.log("setItem out",item);

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
      <Container  bgColor="white" maxW="container.2lg" py={2}>
        <Box display="flex" flexDirection={{base:"column", md:"row"}} gap={2}>

          <Box flex={{base:6,md:5}} >
            <Box display="flex" flexDirection={{base:"column-reverse", md:"row"}} >
              <Box flex={{base:6,md:2}} >
                <Box display="flex" flexDirection={{base:"row", md:"column"}} >
                  {
                    
                    item?.imgUrl?.map((im)=>(
                       <Box _hover={{cursor:"pointer"}} onMouseEnter={()=>setHoverImgUrl(im)} key={im} border="1px solid gray" minW="80px" minH="80px" display="flex"  justifyContent="center" alignItems="center">
                        <Image maxH="60px" maxW="80%" src={im} />
                      </Box>
                    ))
                  }
                  
                </Box>

              </Box>

              <Box minH="250px" maxH="250px" minW="300px" maxW="300px" display="flex" flex={{base:6,md:10}} border="1px solid gray" justifyContent="center" alignItems="center">
                <Image minW="40%" src={hoverImgUrl} />
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