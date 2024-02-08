import { useState } from 'react'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Login from './login'
import SignUp from './sign-up'
import GoogleAuth from './google-auth'

export default function AuthForm () {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>

      <Box border={'1px solid gray'} borderRadius={6} padding={5}>
        <VStack>
          <Text
            as={'h1'}
            fontFamily={'Poppins'}
            color={'#FC6736'}
            fontWeight={800}
            fontSize={'2rem'}
            my={5}
          >Photo
            <Box
              display={'inline-block'}
              color={'#0D9276'}
              fontWeight={300}
            >Gram
            </Box>
          </Text>

          {!isLogin
            ? <SignUp />
            : <Login />
          }

          <Flex alignItems={'center'} justifyContent={'center'} my={isLogin ? '48px' : 0} gap={4} w={'full'}>
            <Box border={'1px solid gray'} w={'full'}/>
            OR
            <Box border={'1px solid gray'} w={'full'}/>
          </Flex>
          <GoogleAuth prefix={isLogin ? 'Login' : 'SignUp'} />
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={6} padding={5}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
          <Box fontSize={16}>
            {isLogin ? "Don't have an account" : 'Already have an account'}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={'blue.300'} cursor={'pointer'}>
            {isLogin ? 'Sign Up' : 'Sign In'}
          </Box>
        </Flex>

      </Box>
    </>
  )
}
