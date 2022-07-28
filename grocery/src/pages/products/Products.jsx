import { 
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
  Select,
  } from '@chakra-ui/react'
  import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import aixos from "axios";


export const Products = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async ()=>{
    let data = await aixos.get("http://localhost:8080/products")
    .then((data)=>data.data);
    console.log("products",data);
    setProducts(data);
  }

  useEffect(()=>{
    getProducts();
  },[])



  return (
    <Box mt="50px" bgColor="whitesmoke" p={2}>
      <Box display="flex" gap={2}>
        
        <VStack p={2} flex={3} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" spacing={4} align='stretch' >
          <Box px={2} mb={0}>
            <Text fontSize="xl" fontWeight="semibold" letterSpacing={1} >Filters</Text>
          </Box>

          <Accordion allowToggle defaultIndex={[0]} allowMultiple>

            <AccordionItem >
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    BRAND
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} >
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    CUSTOMER RATINGS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    OFFERS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    DISCOUNT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    TYPE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    ORGANIC
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize="sm" fontWeight="semibold">
                  <Box flex='1' textAlign='left'>
                    AVAILABILITY
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch">
                  <Checkbox>hello</Checkbox>
                  <Checkbox>hello</Checkbox>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </VStack>
        

        <Box  flex={11} p={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} rowGap={3} columnGap={5} >
            {products.map((item)=>{
              return <Box key={item.id} p={2} _hover={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} borderRadius={5}>
                <VStack spacing={3}>
                  
                  <Box >
                    <Link to={`/products/${item.id}`} >
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
                      <Button  variant="unstyled"  size="sm">
                        <Text color="rgb(40,116,240)">Add Item</Text>
                      </Button>
                    </Box>
                  </Box>
                </VStack>

              </Box>
            })}
          </SimpleGrid>
        </Box>

      </Box>
    </Box>
  )
}
