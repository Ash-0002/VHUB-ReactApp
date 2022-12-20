import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container, Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'conatiner.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'center'}
          spacing={'8'}
          w={["full", "96"]}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password ?</Link>
          </Button>
          <Button type={'submit'} colorScheme={'purple'} w={'full'}>
            Log In
          </Button>
          <Text>
            Don't have an account?{" "}
            <Button variant={"link"} colorScheme={"purple"}><Link to={"/signup"}>Sign Up</Link></Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
