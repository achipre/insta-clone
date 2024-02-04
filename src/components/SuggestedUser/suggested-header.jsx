import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function SuggestedHeader () {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex gap={2} justifyContent={'center'}>
        <Avatar name='As a programer' src='./img-profile.jpeg'/>
        <Flex direction={'column'} justifyContent={'center'}>
          <Text fontWeight={600} fontSize={14}>username</Text>
          <Text fontSize={14} color={'gray'}>name</Text>
        </Flex>
      </Flex>
      <Link as={RouterLink} to={'./login'} variant={'link'} fontWeight={600} fontSize={12} color={'cyan.400'} transition={'ease-in-out .35s'} _hover={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
    </Flex>
  )
}
