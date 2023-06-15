import React from "react";
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
  useToast,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const toast = useToast();
  

  const handleLogin = async () => {
    let res = await axios.post(`https://reqres.in/api/login`, {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });
    console.log(res);
    if (res.status === 200) {
      toast({
        title: "Login Successful.",
        description: "Redirecting to inventory page.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
    }
    localStorage.setItem("token", JSON.stringify(res.data.token));
    nav("/owner/inventory");
  };
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} m={"40px 20px"}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image h={"500px"} m={"auto"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://c1.wallpaperflare.com/preview/615/178/465/ice-cream-fruits-dessert.jpg'
          }
        />
      </Flex>
    </Stack>
  );
};

export default Login;
