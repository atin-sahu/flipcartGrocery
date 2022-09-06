import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  InputRightElement,
  InputGroup,
  FormErrorMessage,
  FormHelperText,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

export const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userCpassword, setUserCpassword] = useState("");
  const [show_pass, setShow_pass] = useState(false)
  const [show_C_pass, setShow_C_pass] = useState(false)
  const [isError, setIsError] = useState(true);
  const navigate = useNavigate();

  const handle_C_password = (e) =>{
    const Cpassword = e.target.value;
    setUserCpassword(Cpassword);
    if(userPassword != Cpassword){
      setIsError(true);
    }else{
      setIsError(false);
    }
  }
  
  const handleClick_pass = ()=>{setShow_pass(!show_pass)}
  const handleClick_C_pass = ()=>{setShow_C_pass(!show_C_pass)}

  const submitHandler = async(e) => {
    e.preventDefault();

    const details = {
      name:userName,
      email: userEmail,
      password: userPassword,
    };
    
    try {
      let res = await axios.post("https://flipcartgrocery.herokuapp.com/register",details)
      console.log(res);
      alert("Registration successfull !");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }

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
                <InputGroup>
                  <InputLeftElement>
                    <FaUser></FaUser>
                  </InputLeftElement>
                  <Input
                    required
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </InputGroup>
            </FormControl>
              <FormControl id="email" mb={3}>
                <FormLabel mb={0}>Email :</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdEmail></MdEmail>
                    </InputLeftElement>
                    <Input
                      required
                      type="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </InputGroup>
              </FormControl>
              <FormControl id="password" mb={3}>
                <FormLabel mb={0}>Password :</FormLabel>
                <InputGroup>
                  <Input
                    required
                    type={show_pass ? "text" : "password"}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <InputRightElement width='3rem'>
                    {show_pass ? (
                      <ViewIcon onClick={handleClick_pass}></ViewIcon>
                      ) : (
                      <ViewOffIcon onClick={handleClick_pass}></ViewOffIcon>
                      )
                    }
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="cPassword" mb={3}>
                <FormLabel mb={0}>Confirm Password :</FormLabel>
                <InputGroup>
                  <Input
                    required
                    type={show_C_pass ? "text" : "password"}
                    onChange={(e)=>handle_C_password(e)}
                    focusBorderColor={isError ? "red.300":"blue.400"}
                  />
                  <InputRightElement width='3rem'>
                    {show_C_pass ? (
                      <ViewIcon onClick={handleClick_C_pass}></ViewIcon>
                      ) : (
                      <ViewOffIcon onClick={handleClick_C_pass}></ViewOffIcon>
                      )
                    }
                  </InputRightElement>
                </InputGroup>
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