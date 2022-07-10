import { Box, Button, Text, Heading, Input, } from '@chakra-ui/react'
import React from 'react'
import { Search2Icon } from "@chakra-ui/icons"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

export const Search = () => {

    const [item,SetItem] = useState([]);
    const [finalFilter, setFinalFilter] = useState([]);

    const getItem =async ()=>{
        const data =await axios.get("https://country-population71.herokuapp.com/countries")
        .then((data)=>data.data);
        console.log(data);
        SetItem(data);

    }

    useEffect(()=>{
        getItem();
    },[]);

    const handleSearch = (value)=>{
        const filterdata = item.filter((val)=>{
            return val.country.toLowerCase().includes(value.toLowerCase());
        });
        if(value == ""){
            setFinalFilter([]);
        }else{
            setFinalFilter(filterdata.slice(0,10));
        }
        
    }

  return (
    <Box >
            <Box borderRadius={3} display="flex" h="30px" width="100%" bgColor="white" alignItems="center" p={4}>
                <Input h="30px" variant="unstyled" border="none" placeholder="type here to search" onChange={(e)=>handleSearch(e.target.value)}></Input>
                <Button h="30px" variant="unstyled"  leftIcon={<Search2Icon color="rgb(38,165,65)" />} ></Button>
            </Box>
            {   finalFilter.length !== 0 && (
                <Box position="absolute" w="100%" top="32px" bgColor="white" p={2} border="1px solid black" borderRadius={3} height="400px" overflow="hidden" overflowY="auto"  css={{ '&::-webkit-scrollbar': {display:"none"},}}>
                    {finalFilter.map((itm)=>{
                        return (
                            <Box key ={itm.city} cursor="pointer" borderBottom="1px solid black" pl={1} p={2} _hover={{backgroundColor:"whiteSmoke"}} >
                                <Text fontSize="sm" fontWeight="bold">{itm.country}</Text>
                                <Text fontSize="lg" >{itm.city}</Text>
                            </Box>
                        )
                    })}
                </Box>
                )
            }
    </Box>
  )
}