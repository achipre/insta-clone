import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

export default function Login () {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const { login, loading } = useLogin()

  return (
    <>
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
      <Button w={'full'} color={'#FC6736'} isLoading={loading} fontWeight={'300'} fontSize={18} onClick={() => login(inputs)}>
            Log in
      </Button>
    </>
  )
}
