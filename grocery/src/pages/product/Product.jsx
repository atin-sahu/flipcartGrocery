import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';


export const Product = () => {

  const  { id }  = useParams();
  

  useEffect(() => {
    getData();
  }, []);

  
  const getData = async () => {
    const data = await axios.get(`http://localhost:8080/products/${id}`)
    .then((data) => data.data)
    console.log("single product",data);
  };

  return (
    <Box mt="50px" bgColor="whitesmoke" px={10}>
      product details
    </Box>
  )
}