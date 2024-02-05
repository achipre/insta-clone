import { Avatar, Flex, Text } from '@chakra-ui/react'

export default function CommentPost ({ createAt, username, profilePicture, text }) {
  return (
    <Flex w={'full'} gap={4} >
      <Avatar src={profilePicture} size={'sm'} />
      <Flex direction={'column'}>
        <Text as={'span'} fontSize={12} fontWeight={600} m={0} display={'inline'}>{username}: <Text as={'span'} fontWeight={100} ml={1}>{text}</Text></Text>
        <Text fontSize={12} fontWeight={600} color={'gray'} >{createAt}</Text>
      </Flex>
    </Flex>
  )
}
