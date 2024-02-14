import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import { timeAgo } from '../../utils/timeAgo'
import { useUserProfileStore } from '../../store/useProfileStore'
import { Link as RouterLink } from 'react-router-dom'

export default function Caption ({ post }) {
  const userProfile = useUserProfileStore(state => state.userProfile)
  return (
    <Flex w={'full'} gap={4}>
      <Link as={RouterLink} to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicture} size={'sm'} />
      </Link>
      <Flex direction={'column'}>
        <Flex justifyContent={'center'} alignItems={'baseline'}>
          <Link as={RouterLink} to={`/${userProfile.username}`} >
            <Text as={'span'} fontSize={13} fontWeight={600} m={0} >{userProfile.username}:
            </Text>
          </Link>
          <Text as={'span'} fontSize={12} fontWeight={600} color={'green'} ml={1}>
            {post.caption}
          </Text>
        </Flex>
        <Text as={'span'} fontSize={12} fontWeight={100} color={'gray'} >{timeAgo(post.createAt)}</Text>
      </Flex>
    </Flex>
  )
}
