import useGetUserPosts from '../../hooks/useGetUserPosts'
import { useUserProfileStore } from '../../store/useProfileStore'
import ProfilePost from './profile-post'
import { Flex, Grid, Skeleton, Text, VStack } from '@chakra-ui/react'

export default function ProfilePosts () {
  const { isLoading, posts } = useGetUserPosts()
  const userProfile = useUserProfileStore(state => state.userProfile)

  const noPostFound = !isLoading && userProfile.posts.length < 1 && posts.length < 1
  if (noPostFound) return <NoPostFound />
  return (
  <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={2}>
    {isLoading &&
      [0, 1, 2, 3, 4, 5].map((_, idx) => (
      <VStack key={idx}>
        <Skeleton w={'full'} aspectRatio={1}/>
      </VStack>
      ))}
    {!isLoading && <>
      {posts.map(post => (
        <ProfilePost post={post} key={post.id} />
      ))}
    </>}
  </Grid>
  )
}

function NoPostFound () {
  return (
    <Flex flexDir='column' textAlign={'center'} mx={'auto'} mt={10}>
      <Text fontSize={'2xl'}>No Posts Found</Text>
    </Flex>
  )
}
