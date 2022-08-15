import { 
  Box,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
  Select,
  Center,
  } from '@chakra-ui/react'
  import { Link, useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import aixos from "axios";
import axios from 'axios';
import { FilterComponent } from '../../components/FilterComponent';


export const Products = () => {

  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const [page,setPage] = useState(Number(searchParams.get("page") || 1));
  const {key} = useParams();
  console.log("search key",key);

  const getProducts = async (params)=>{
    let data = await aixos.get(`http://localhost:8080/${key}`,{ params })
    .then((data)=>data.data);
    console.log("products",data);
    setProducts(data);
    console.log("params",params,params.page);
  }

  useEffect(()=>{
    const params = {
      brand:searchParams.getAll("brand"),
      page:searchParams.get("page")
    }
    getProducts(params);
    setSearchParams(params);
  },[key,page,searchParams])


  const setToCart = async (cartItem)=>{
    let cartData = await axios.get("http://localhost:8080/cart")
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
    let cartProduct = await axios.post(`http://localhost:8080/cart`,cartItem)
    .then((cartProduct)=>cartProduct.data);
    alert("Item Added Successfull")
  }



  return (
    <Box mt="50px" bgColor="whitesmoke" p={2}>
      <Box display="flex" gap={2}>

        <FilterComponent getdataFunc={getProducts}></FilterComponent>

        <Box  flex={11} p={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} rowGap={3} columnGap={5} >
            {products.map((item)=>{
              return <Box key={item.id} p={2} _hover={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} borderRadius={5}>
                <VStack spacing={3}>
                  
                  <Box >
                    <Link to={`/all-products/${key}/${item.id}`} >
                      <Image margin="auto" height="120px" src={item.imgUrl[0]}></Image>
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box h="50px">
                      <Link to={`/products/${item.id}`}>
                        <Text noOfLines={2}>{item.title}</Text>
                      </Link>
                    </Box>
                    <Box display="flex" gap={2} >
                      <Text noOfLines={1} fontWeight="semibold">₹ {item.price}</Text>
                      <Text noOfLines={1} color="silver" as="del">₹ {item.old_price}</Text>
                      <Text noOfLines={1} color="rgb(38,165,65)" fontWeight="semibold">{item.disscount}% off</Text>
                    </Box>
                  </Box>
                 
                  <Box width="100%" display="flex" gap={2} alignItems="center" textAlign="center">
                    <Box flex={6} border="1px solid black"  borderRadius={5} >
                      {item.qty.length == 1 ? (
                      <Box>
                        <Button disabled variant="unstyled"  size="sm">
                          <Text color="black">{item.qty[0]} {item.unit}</Text>
                        </Button>
                      </Box>) : (
                        <Box p={1}>
                          <Select variant="unstyled" >
                            {item.qty.map((q)=>{
                              return <option key={q} value='option1'>{q} {item.unit}</option>
                            })}
                          </Select>
                      </Box>
                      ) }
                    </Box>
                    <Box flex={6} border="1px solid black"  borderRadius={5}  >
                      <Button onClick={()=>setToCart(item)}  variant="unstyled"  size="sm">
                        <Text color="rgb(40,116,240)">Add Item</Text>
                      </Button>
                    </Box>
                  </Box>
                </VStack>

              </Box>
            })}
          </SimpleGrid>
          <Center>
            <Box display='flex' width='30%' justifyContent='space-around'>
              <Button disabled={page==1} colorScheme='blue' onClick={()=>(setPage(page-1))} > Prev</Button>
              <Button colorScheme='blue' onClick={()=>(setPage(page+1))} >Next</Button>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
