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
import { FilterComponent } from '../../components/FilterComponent';
import { AddToCart } from '../../components/AddToCart';
import { Sorting } from '../../components/Sorting';
import { useSelector } from 'react-redux';

export const Products = () => {

  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const [page,setPage] = useState(1);
  const {key} = useParams();
  const store = useSelector((store)=>store);
  
  const getProducts = async (params)=>{
    let data = await aixos.get(`https://flipcartgrocery.herokuapp.com/${key}`,{ params })
    .then((data)=>data.data);
    setProducts(data);
  }

  useEffect(()=>{
    const params = {
      brand:searchParams.getAll("brand"),
      page:page,
    }
    getProducts(params);
    setSearchParams(params);
  },[key,page,searchParams])

  return (
    <Box mt="50px" bgColor="whitesmoke" p={2}>
      <Box display="flex" gap={2}>
        <Box flex={2.2}>
          <Sorting getdataFunc={getProducts}></Sorting>
          <FilterComponent getdataFunc={getProducts}></FilterComponent>
        </Box>

        <Box flex={9.8} p={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} rowGap={3} columnGap={5} >
            {products.map((item)=>{
              return <Box key={item.id} p={2} _hover={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} borderRadius={5}>
                <VStack spacing={3}>
                  
                  <Box >
                    <Link to={`/${key}/${item._id}`} >
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
                      <Text noOfLines={1} fontWeight="semibold">₹ {(item.old_price*(100-item.disscount))/100}</Text>
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
                      <AddToCart Item={item}></AddToCart>
                    </Box>
                  </Box>
                </VStack>

              </Box>
            })}
          </SimpleGrid>
          <Center>
            <Box display='flex' width='30%' justifyContent='space-around' alignItems="center">
              <Button disabled={page==1} colorScheme='blue' onClick={()=>(setPage(page-1))} > Prev</Button>
              <Text fontWeight="semibold" fontSize="md">{page}</Text>
              <Button disabled={products.length<5} colorScheme='blue' onClick={()=>(setPage(page+1))} >Next</Button>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
