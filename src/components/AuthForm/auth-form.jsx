import { useState } from 'react'
import { Alert, AlertDescription, AlertIcon, Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function AuthForm () {
  const [isLogin, setIsLogin] = useState(true)
  const [isAlert, setIsAlert] = useState(false)
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  const handleAuth = () => {
    if (isAlert && (!inputs.email || !inputs.password)) return
    if (!inputs.email || !inputs.password) {
      setIsAlert(true)
      setTimeout(() => {
        setIsAlert(false)
      }, 2000)
      return
    }
    navigate('/')
  }

  return (
    <>
    {isAlert && <Alert as={'span'} status='error' position={'absolute'} bottom={4} maxW={'360px'} right={4} borderRadius={4} variant={'solid'}>
      <AlertIcon />
      <AlertDescription>Please Fill all the fields.</AlertDescription>
    </Alert>}
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
          <Input
            placeholder='Email'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='email'
            fontSize={14}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder='Password'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='password'
            fontSize={14}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin
            ? <Input
            placeholder='Confirm Password'
            _hover={{ border: '1px solid gray' }}
            _focusVisible={{ border: '1px solid #0D9276' }}
            type='password'
            fontSize={14}
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
            : null
          }
          {/* Login Auth */}
          <Button w={'full'} color={'#FC6736'} fontWeight={'300'} fontSize={18} onClick={handleAuth}>
            {isLogin ? 'Log in' : 'Sign up'}
          </Button>
          <Flex alignItems={'center'} justifyContent={'center'} my={isLogin ? '40px' : 4} gap={4} w={'full'}>
            <Box border={'1px solid gray'} w={'full'}/>
            OR
            <Box border={'1px solid gray'} w={'full'}/>
          </Flex>
          <Flex mb={4} gap={4} alignItems={'center'} cursor={'pointer'}>
            <Image src='./logoGoogle.png' w={'32px'} />
            <Box color={'blue.300'}>Login with Google</Box>
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
