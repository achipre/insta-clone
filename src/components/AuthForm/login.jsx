import { Alert, AlertDescription, AlertIcon, Button, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login () {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [isAlert, setIsAlert] = useState(false)
  const navigate = useNavigate()
  const handleAuth = () => {
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
      {/* Login Auth */}
      <Button w={'full'} color={'#FC6736'} fontWeight={'300'} fontSize={18} onClick={handleAuth}>
            Log in
      </Button>
    </>
  )
}
