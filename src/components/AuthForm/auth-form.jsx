import { useState } from 'react'
import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'

export default function AuthForm () {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <Box border={'1px solid gray'} borderRadius={6} padding={5}>
        <VStack>
          <Text
            fontFamily={'Poppins'}
            color={'#FC6736'}
            fontWeight={800}
            fontSize={'2rem'}
            my={6}
          >Photo
            <Text
              display={'inline-block'}
              color={'#0D9276'}
              fontWeight={300}
            >Gram
            </Text>
          </Text>
          <Input
            placeholder='Email'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='email'
            fontSize={14}
          />
          <Input
            placeholder='Password'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='password'
            fontSize={14}
          />
          {!isLogin &&
          <Input
            placeholder='Confirm Password'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='password'
            fontSize={14}
          />
          }
          <Button w={'full'} color={'#FC6736'} fontWeight={'300'} fontSize={18}>
            {isLogin ? 'Log in' : 'Sign up'}
          </Button>
          <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={4} w={'full'}>
            <Box border={'1px solid gray'} w={'full'}/>
            OR
            <Box border={'1px solid gray'} w={'full'}/>
          </Flex>
          <Flex my={4} gap={4} alignItems={'center'} cursor={'pointer'}>
            <Image src='./logoGoogle.png' w={'32px'} />
            <Text color={'blue.300'}>Login with Google</Text>
          </Flex>
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
