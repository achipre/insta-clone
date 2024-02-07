import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <Container maxW={'container.lg'} my={4}>
      <Flex w={'full'} justifyContent={{ base: 'center', sm: 'space-between' }} alignItems={'center'}>
        <Text
          as={'h1'}
          fontFamily={'Poppins'}
          // color={'white'}
          fontWeight={800}
          fontSize={'2rem'}
          my={5}
        >Photo
          <Box
            display={'inline-block'}
            // color={'#0D9276'}
            fontWeight={300}
          >Gram
          </Box>
        </Text>
        <Flex gap={4}>
          <Link to={'/login'}>
            <Button colorScheme='blue' size={'sm'}>
              Login
            </Button>
          </Link>
          <Link to={'/login'}>
            <Button variant={'outline'} size={'sm'}>
              SignUp
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  )
}
