import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, SimpleGrid, Text, VStack, Image, Button} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import aixos from "axios";


export const Product = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async ()=>{
    let data = await aixos.get("http://localhost:8080/products")
    .then((data)=>data.data.pulses);
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
                  <Box>
                    <Image height="120px" src={item.imgUrl[0]}></Image>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box h="50px">
                      <Text noOfLines={2}>{item.title}</Text>
                    </Box>
                    <Box display="flex" gap={2} >
                      <Text noOfLines={1} fontWeight="semibold">₹ {item.price}</Text>
                      <Text noOfLines={1} color="silver" as="del">₹ {item.old_price}</Text>
                      <Text noOfLines={1} color="rgb(38,165,65)" fontWeight="semibold">{item.disscount}% off</Text>
                    </Box>
                  </Box>
                  <Box display="flex" gap={2} >
                    {item.qty.length > 0 ? (
                    <Button disabled={item.qty.length == 1}  variant="outline" bgColor="white" >
                      <Text color="black">{item.qty[0]} Kg</Text>
                    </Button>) : (
                      <Button  variant="outline" bgColor="white" >
                      <Text color="black">{item.qty[0]} Kg</Text>
                    </Button>
                    ) }
                    <Button  variant="outline" bgColor="white" >
                      <Text color="rgb(40,116,240)">ADD Item</Text>
                    </Button>
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
