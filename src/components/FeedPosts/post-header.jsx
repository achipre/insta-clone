import { Avatar, Flex, Text } from '@chakra-ui/react'

export default function PostHeader ({ username, avatar }) {
  return (
    <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'} mb={2}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name='user' src={avatar} alt={username} size={'sm'}/>
        <Flex gap={2}>
          <Text fontSize={14} fontWeight={600}>{username}</Text>
          <Text fontSize={14} color={'gray'} > • 1w</Text>
        </Flex>
      </Flex>
      <Text cursor={'pointer'} fontSize={14} color={'cyan.400'} fontWeight={600} _hover={{ color: 'white' }} transition={'ease-in-out .35s'} >Unfollow</Text>

    </Flex>
  )
}
