import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import AuthForm from '../../components/AuthForm/auth-form'

export default function LoginPage () {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} flexDir={'row'}>
      <Container maxW={'container.md'}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          <Box display={{ base: 'none', md: 'block' }} >
            <Image src='./mockup-phone.webp' maxH={'650px'} alt='Imagen of Phone'/>
          </Box>
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'} fontSize={20} fontFamily={'monospace'}>Get the App</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image cursor={'pointer'} src='./LogoGoogleAppLight.png' alt='Logo PlayStore' h={'48px'}/>
              <Image src='./LogoAppleAppLight.png' alt='Logo AppStore' h={'48px'}/>
            </Flex>

          </VStack>
        </Flex>

      </Container>
    </Flex>
  )
}
