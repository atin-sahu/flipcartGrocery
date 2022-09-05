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
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/auth/action";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const isAuth = useSelector((store)=>store.authReducer);

  console.log("isAuth login",isAuth);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      email: userEmail,
      password: userPassword,
    };
    console.log(payload);
    dispatch(signIn(payload));
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
      <Stack spacing={8} py={12} width={{base:"80%", md:"60%", lg:"45%"}}>
          <Box align='center'>
              <Image h="50px" src='https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png'></Image>
          </Box>
        
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <FormControl id="email">
                <FormLabel>Email/Mobile :</FormLabel>
                <Input
                  required
                  type="text"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password :</FormLabel>
                <Input
                  required
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/forgot" ><Text align="center" color="rgb(40,116,240)">Forgot password?</Text></Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                >
                  Login
                </Button>
                <Link to="/register"><Text align="center" color="rgb(40,116,240)">New User? create an account</Text></Link>
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