import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userCpassword, setUserCpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      name:userName,
      email: userEmail,
      password: userPassword,
      cPassword: userCpassword,
    };

    console.log(payload);

  };

  return (
  <Box mt="50px">
     <Box w='80%' m='auto'>
       <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8}  py={12}  width={{base:"80%", md:"60%", lg:"45%"}}>
          <Box align='center'>
              <Image h="50px" src='https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png'></Image>
          </Box>
        
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack >
            <form onSubmit={submitHandler}>
            <FormControl id="name" mb={3}>
                <FormLabel mb={0}>Name :</FormLabel>
                <Input
                  required
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" mb={3}>
                <FormLabel mb={0}>Email/Mobile :</FormLabel>
                <Input
                  required
                  type="text"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" mb={3}>
                <FormLabel mb={0}>Password :</FormLabel>
                <Input
                  required
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </FormControl>
              <FormControl id="cPassword" mb={3}>
                <FormLabel mb={0}>Confirm Password :</FormLabel>
                <Input
                  required
                  type="password"
                  onChange={(e) => setUserCpassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={5} mt={5}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                >
                  Register
                </Button>
                <Link to="/login"><Text align="center" color="rgb(40,116,240)">Have Account? Login</Text></Link>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
   </Box>
  </Box>
  );
};