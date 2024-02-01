import { Box, Container, Flex, Image } from '@chakra-ui/react'

export default function LoginPage () {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Container maxW={'container.md'}>
        <Box display={{ base: 'none', md: 'block' }} >
          <Image src='mockup-phone.webp' maxH='60vh' minH='600px'/>
        </Box>

      </Container>
    </Flex>
  )
}
