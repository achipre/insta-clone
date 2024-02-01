import { Box, Container, Flex } from '@chakra-ui/react'

export default function LoginPage () {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Container maxW={'container.md'} bg='blue.400'>
        <Box display={{ base: 'none', md: 'block' }} >

        </Box>

      </Container>
    </Flex>
  )
}
