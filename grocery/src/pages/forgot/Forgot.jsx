import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Box,
  } from '@chakra-ui/react';
  
  
  export const Forgot = () => {
    return (
      <Box mt="50px" >
        <Flex
        minH={'92vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}
          >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            You'll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
      </Box>
    );
  }
