import { Box, Heading, Text, Image, Stack, SimpleGrid, Button} from '@chakra-ui/react'
import React from 'react'

const SmallText = ({children})=>{
    return <Text color="grey" fontSize="xs" noOfLines={1}>
        {children}
    </Text>
}

const Banner = () => {
  return (
    <Box margin="auto" p={5} bgColor="rgb(37,175,54)" borderRadius={3} >
        <Heading size="lg" letterSpacing={1} color="white">Steal Deals And More For You...</Heading>
        <SimpleGrid columns={{base:1, sm:2, md:3, lg:4}} gap={4} my={5}>
            <Box>
                <Box bgColor="rgb(240,240,240)" p={2} borderTopRadius={5}>
                    <Text noOfLines={1}> Shop for ₹800 to get discount</Text>
                </Box>
                <Box bgColor="white" display="flex" borderBottomRadius={5}>
                    <Box flex={4} p={5}>
                        <Image w="full" src="https://rukminim1.flixcart.com/image/100/100/jw5a2kw0/sugar/m/v/m/1-sulphurless-pouch-refined-sugar-dhampure-crystal-original-imafgrrvvd4czjum.jpeg?q=100" ></Image>
                    </Box>
                    <Box flex={8} py={5} >
                        <Text noOfLines={1} letterSpacing={1}>Heading...</Text>
                        <SmallText>1 kg Pouch</SmallText>
                        <SmallText>Expiry 29 May 2024</SmallText>
                        <Text fontWeight="bold" >₹1</Text>
                        <SmallText>Current Price : ₹49</SmallText>
                        <Button size="sm" mt={2} variant="outline" color="rgb(40,116,240)" width="90%"> Add Item</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box bgColor="rgb(240,240,240)" p={2} borderTopRadius={5}>
                    <Text noOfLines={1}> Shop for ₹800 to get discount</Text>
                </Box>
                <Box bgColor="white" display="flex" borderBottomRadius={5}>
                    <Box flex={4} p={5}>
                        <Image w="full" src="https://rukminim1.flixcart.com/image/100/100/jw5a2kw0/sugar/m/v/m/1-sulphurless-pouch-refined-sugar-dhampure-crystal-original-imafgrrvvd4czjum.jpeg?q=100" ></Image>
                    </Box>
                    <Box flex={8} py={5} >
                        <Text noOfLines={1} letterSpacing={1}>Heading...</Text>
                        <SmallText>1 kg Pouch</SmallText>
                        <SmallText>Expiry 29 May 2024</SmallText>
                        <Text fontWeight="bold" >₹1</Text>
                        <SmallText>Current Price : ₹49</SmallText>
                        <Button size="sm" mt={2} variant="outline" color="rgb(40,116,240)" width="90%"> Add Item</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box bgColor="rgb(240,240,240)" p={2} borderTopRadius={5}>
                    <Text noOfLines={1}> Shop for ₹800 to get discount</Text>
                </Box>
                <Box bgColor="white" display="flex" borderBottomRadius={5}>
                    <Box flex={4} p={5}>
                        <Image w="full" src="https://rukminim1.flixcart.com/image/100/100/jw5a2kw0/sugar/m/v/m/1-sulphurless-pouch-refined-sugar-dhampure-crystal-original-imafgrrvvd4czjum.jpeg?q=100" ></Image>
                    </Box>
                    <Box flex={8} py={5} >
                        <Text noOfLines={1} letterSpacing={1}>Heading...</Text>
                        <SmallText>1 kg Pouch</SmallText>
                        <SmallText>Expiry 29 May 2024</SmallText>
                        <Text fontWeight="bold" >₹1</Text>
                        <SmallText>Current Price : ₹49</SmallText>
                        <Button size="sm" mt={2} variant="outline" color="rgb(40,116,240)" width="90%"> Add Item</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box bgColor="rgb(240,240,240)" p={2} borderTopRadius={5}>
                    <Text noOfLines={1}> Shop for ₹800 to get discount</Text>
                </Box>
                <Box bgColor="white" display="flex" borderBottomRadius={5}>
                    <Box flex={4} p={5}>
                        <Image w="full" src="https://rukminim1.flixcart.com/image/100/100/jw5a2kw0/sugar/m/v/m/1-sulphurless-pouch-refined-sugar-dhampure-crystal-original-imafgrrvvd4czjum.jpeg?q=100" ></Image>
                    </Box>
                    <Box flex={8} py={5} >
                        <Text noOfLines={1} letterSpacing={1}>Heading...</Text>
                        <SmallText>1 kg Pouch</SmallText>
                        <SmallText>Expiry 29 May 2024</SmallText>
                        <Text fontWeight="bold" >₹1</Text>
                        <SmallText>Current Price : ₹49</SmallText>
                        <Button size="sm" mt={2} variant="outline" color="rgb(40,116,240)" width="90%"> Add Item</Button>
                    </Box>
                </Box>
            </Box>
        </SimpleGrid>


    </Box>
  )
}

export default Banner