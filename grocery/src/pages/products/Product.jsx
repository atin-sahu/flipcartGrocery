import { Box, Checkbox, Divider, Heading, Select, StackDivider, Text, VStack,} from '@chakra-ui/react'
import React from 'react'
import { ChevronUpIcon } from "@chakra-ui/icons";

export const Product = () => {
  return (
    <Box mt="50px" bgColor="whitesmoke" p={2}>
      <Box display="flex" gap={2}>
        
        <VStack p={2} flex={3} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" spacing={4} align='stretch' >
          <Box px={2} mb={0}>
            <Text fontSize="xl" fontWeight="semibold" letterSpacing={1} >Filters</Text>
          </Box>
          <Box borderBottom="1px solid black"></Box>
          <Box borderBottom="1px solid black" >
            <Box display="flex" justifyContent="space-between">
              <Text>BRAND</Text>
              <ChevronUpIcon></ChevronUpIcon>
            </Box>
            <VStack align="stretch" maxH="100px" overflow="hidden" overflowY="scroll" scroll>
              <Checkbox checked> hello</Checkbox>
              <Checkbox checked> hello</Checkbox>
              <Checkbox checked> hello</Checkbox>
              <Checkbox checked> hello</Checkbox>
              <Checkbox checked> hello</Checkbox>
              <Checkbox checked> hello</Checkbox>
            </VStack>
          </Box>
          <Box >
            3
          </Box>
        </VStack>
        

        <Box  flex={11} p={2} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          <Text>Items</Text>
        </Box>

      </Box>
    </Box>
  )
}
