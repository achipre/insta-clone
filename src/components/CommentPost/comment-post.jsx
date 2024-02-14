import { Avatar, Flex, Link, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'

export default function CommentPost ({ comment }) {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createBy)
  if (isLoading) return <CommentSkeleton />
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
          <Text as={'span'} fontSize={12} fontWeight={600} color={'gray'} ml={1}>
            {comment.comment}
          </Text>
        </Flex>
        <Text as={'span'} fontSize={12} fontWeight={100} color={'gray'} >{timeAgo(comment.createAt)}</Text>
      </Flex>
    </Flex>
  )
}

function CommentSkeleton () {
  return (
    <Flex gap={4} w={'full'} alignItems={'center'}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={'column'}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  )
}
