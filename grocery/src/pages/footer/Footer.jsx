
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BsFillBagFill } from "react-icons/bs"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'sm'} mb={2} color="grey">
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.200'),
      }}>
      {children}
    </chakra.button>
  );
};

const FooterOption = ({children}) =>{
    return <Box display="flex" gap={2} alignItems="center" fontSize="sm">
        {children}
    </Box>
}

export const Footer = () => {
  return (
    <Box
      // bg={useColorModeValue('gray.50', 'gray.900')}
      // color={useColorModeValue('gray.700', 'gray.200')}
      bg="rgb(23,35,55)"
      color="white"
      >
      <Container as={Stack} maxW={'7xl'} py={10}  direction={{base:'column', lg:'row'}} justify='space-between'>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4, }} spacing={8} fontSize="xs">
          <Stack align={'flex-start'}>
            <ListHeader>ABOUT</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Flipkart Stories</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Flipkart Wholesale</Link>
            <Link href={"#"}>Corporate Information</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>HELP</ListHeader>
            <Link href={"#"} >Payments</Link>
            <Link href={"#"} >Shipping</Link>
            <Link href={"#"} >Cancellation & Returns</Link>
            <Link href={"#"} >FAQ</Link>
            <Link href={"#"} >Report Infringement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>POLICY</ListHeader>
            <Link href={'#'}>Return Policy</Link>
            <Link href={'#'}>Terms Of Use</Link>
            <Link href={'#'}>Security</Link>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Sitemap</Link>
            <Link href={'#'}>EPR Compliance</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>SOCIAL</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>YouTube</Link>
          </Stack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2, }} spacing={8} fontSize="xs">
          <Stack align={'flex-start'} >
              <ListHeader>Mail Us : </ListHeader>
                <Text>Flipkart Internet Private Limited,</Text>
                <Text>Buildings Alyssa, Begonia &</Text>
                <Text>Clove Embassy Tech Village,</Text>
                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                <Text>Bengaluru, 560103,</Text>
                <Text>Karnataka, India</Text>
                
            </Stack>

            <Stack align={'flex-start'}>
              <ListHeader>Registered Office Address : </ListHeader>
                <Text>Flipkart Internet Private Limited,</Text>
                <Text>Buildings Alyssa, Begonia &</Text>
                <Text>Clove Embassy Tech Village,</Text>
                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                <Text>Bengaluru, 560103,</Text>
                <Text>Karnataka, India</Text>
                <Text>CIN : U51109KA2012PTC066107</Text>
                <Link href='#' color="blue">Telephone: 044-45614700</Link>
              
            </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
            <Stack direction={{base:'column',md:'row'}}  spacing={6} >
                <FooterOption>
                    <BsFillBagFill color="yellow"></BsFillBagFill>
                    <Link href='#'>Become a Seller</Link>
                </FooterOption>
                <FooterOption>
                    <BsFillBagFill color="yellow"></BsFillBagFill>
                    <Link href='#'>Advertise</Link>
                </FooterOption>
                <FooterOption>
                    <BsFillBagFill color="yellow"></BsFillBagFill>
                    <Link href='#'>Gift Cards</Link>
                </FooterOption>
                <FooterOption>
                    <BsFillBagFill color="yellow"></BsFillBagFill>
                    <Link href='#'>Help Center</Link>
                </FooterOption>
                <FooterOption>
                    <Text>© 2007-2022 Flipkart.com</Text>
                </FooterOption>
            </Stack>
          
            <Stack direction={'row'} spacing={6}>
              <SocialButton children={<FaTwitter />} label={'Twitter'} href={'#'}> 
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
        </Container>
      </Box>
    </Box>
  );
}