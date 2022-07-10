import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signIn } from "../redux/auth/action";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      email: userEmail,
      password: userPassword,
    };
    console.log(payload);

    // dispatch(signIn(payload));
  };

  return (
  <Box mt="50px">
     <Box w='80%' m='auto'>
       <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box align='center'>
              <Image src='https://upload.wikimedia.org/wikipedia/commons/9/9c/Cricbuzz_Logo.png'></Image>
          </Box>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Text mb={1}>use <b style={{color:"blue"}}>eve.holt@reqres.in</b> to successful login</Text>
                <Input
                    required
                  type="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
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
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                >
                  Sign in
                </Button>
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