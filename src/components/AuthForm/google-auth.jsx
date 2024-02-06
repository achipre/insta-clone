import { Box, Flex, Image } from '@chakra-ui/react'

export default function GoogleAuth () {
  return (
    <Flex mb={4} gap={4} alignItems={'center'} cursor={'pointer'}>
      <Image src='./logoGoogle.png' w={'32px'} />
      <Box color={'blue.300'}>Login with Google</Box>
    </Flex>
  )
}
