import { Avatar, Button, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useFollowUser from '../../hooks/useFollowUser'
import { timeAgo } from '../../utils/timeAgo'

export default function PostHeader ({ post, creatorProfile }) {
  const { isUpdate, isFollowing, handleFollowUser } = useFollowUser(post.createBy)
  return (
    <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'} mb={2}>
       <Flex alignItems={'center'} gap={2}>
        {creatorProfile
          ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar name='user' src={creatorProfile.profilePicture} alt={creatorProfile.username} size={'sm'}/>
          </Link>
            )
          : (
          <SkeletonCircle size={9} />
            )}
        <Flex gap={2}>
        {creatorProfile
          ? (
            <>
              <Link to={`/${creatorProfile.username}`}>
                <Text fontSize={14} fontWeight={600}>{creatorProfile.username}</Text>
              </Link>
              <Text fontSize={14} color={'gray'} > • {timeAgo(post.createAt)}</Text>
            </>

            )
          : (
            <Skeleton h={6} w={'160px'}/>
            )
        }
         </Flex>
       </Flex>
       <Button
       isLoading={isUpdate}
       onClick={handleFollowUser}
       variant={'ghost'} cursor={'pointer'} fontSize={14} color={'cyan.400'} fontWeight={600} _hover={{ color: 'white' }} transition={'ease-in-out .35s'} >{isFollowing ? 'Unfollow' : 'Follow'}</Button>
    </Flex>

  )
}
