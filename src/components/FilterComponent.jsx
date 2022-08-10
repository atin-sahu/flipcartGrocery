import React, { useEffect, useState } from 'react'
import { 
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Checkbox,
    CheckboxGroup,
    Text,
    VStack,
    } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'

export const FilterComponent = ({getdataFunc}) => {

    const [searchParams,setSearchParams] = useSearchParams();
    const [brandValues, setBrandValues] = useState(searchParams.getAll("brand") || []);
  
    const brandHandler = (values)=>{
        setBrandValues(values)
    }

    useEffect(()=>{
        if(brandValues){
            setSearchParams({brand:brandValues})
            let params = {
                brand:searchParams.getAll("brand")
            }
            getdataFunc(params);
        }
    },[brandValues,searchParams,setSearchParams])


  return (
    <VStack p={2} flex={3} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" spacing={4} align='stretch' h="max-content">
    <Box px={2} mb={0}>
      <Text fontSize="xl" fontWeight="semibold" letterSpacing={1} >Filters</Text>
    </Box>

    <Accordion allowToggle defaultIndex={[0,3]} allowMultiple>

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
            <CheckboxGroup defaultValue={brandValues} onChange={brandHandler}>
                <Checkbox value="TATA">TATA</Checkbox>
                <Checkbox value="Rajdhani">Rajdhani</Checkbox>
                <Checkbox value="Premium">Premium</Checkbox>
                <Checkbox value="Natureland">Natureland</Checkbox>
                <Checkbox value="Fortune">Fortune</Checkbox>
                <Checkbox value="EMAMI">EMAMI</Checkbox>
                <Checkbox value="Dalda">Dalda</Checkbox>
                <Checkbox value="DHARA">DHARA</Checkbox>
                <Checkbox value="INDIA GATE">INDIA GATE</Checkbox>
                <Checkbox value="Daawat">Daawat</Checkbox>
                <Checkbox value="Organic">Organic</Checkbox>
            </CheckboxGroup>
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
  )
}
