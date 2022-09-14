import { Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Radio,
    RadioGroup,
    Stack,
    Text,
    VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'

export const Sorting = ({getdataFunc}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortValue, setSortValue] = useState(searchParams.get("sort") || "");

    const sortHandler = (value)=>{
        setSortValue(value)
    }

    useEffect(()=>{
        if(sortValue){
            setSearchParams({sort:sortValue})
            let params = {
                sort:searchParams.get("sort")
            }
            getdataFunc(params);
        }
    },[sortValue,searchParams])

  return (
    <Box mb={1}>
        <VStack p={2} flex={3} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" spacing={4} align='stretch' h="max-content">
            <Box px={2} mb={0}>
                <Text fontSize="xl" fontWeight="semibold" letterSpacing={1} >Sorting</Text>
            </Box>
            <Accordion allowToggle defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton fontSize="sm" fontWeight="semibold">
                            <Box flex='1' textAlign='left'> Price</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                        <VStack align="stretch">
                            <RadioGroup defaultValue={sortValue} onChange={sortHandler}>
                                <Stack direction="column">
                                    <Radio value="1">Low To High</Radio>
                                    <Radio value="-1">High To Low</Radio>
                                </Stack>
                            </RadioGroup>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    </Box>
  )
}
