import { useState } from 'react'
import { Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

export default function SignUp () {
  // auth from hooks
  const { loading, signup } = useSignUpWithEmailAndPassword()

  const [showPassword, setShowPassword] = useState(false)
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    email: '',
    password: ''
  })
  return (
    <>
      <Input
        placeholder='Fullname'
        _hover={{ border: '1px solid gray' }}
        _focusVisible={{ border: '1px solid #0D9276' }}
        type='text'
        fontSize={14}
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        placeholder='Username'
        _hover={{ border: '1px solid gray' }}
        _focusVisible={{ border: '1px solid #0D9276' }}
        type='text'
        fontSize={14}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder='Email'
        _hover={{ border: '1px solid gray' }}
        _focusVisible={{ border: '1px solid #0D9276' }}
        type='email'
        fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder='Password'
          _hover={{ border: '1px solid gray' }}
          _focusVisible={{ border: '1px solid #0D9276' }}
          type={showPassword ? 'text' : 'password'}
          fontSize={14}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Icon as={IoEyeOffSharp} cursor={'pointer'} /> : <Icon as={IoEyeSharp} cursor={'pointer'} />}
        </InputRightElement>
      </InputGroup>

      <Button
        w={'full'}
        color={'#FC6736'}
        fontWeight={'300'}
        fontSize={18}
        isLoading={loading}
        onClick={() => signup(inputs)}>
        Sign Up
      </Button>
    </>
  )
}
