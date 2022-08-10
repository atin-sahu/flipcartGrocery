import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Banner from './Banner'

export const Home = () => {
  return (
    <Box pt="10px" bgColor="whitesmoke">
      <Box mx={2}  mt="70px">
        <Banner></Banner>
      </Box>

      <Box mx={2} my={10} bgColor="white" p={5}>
        <Box>
        </Box>
      </Box>
    </Box>
  )
}
