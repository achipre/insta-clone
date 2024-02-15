import { Container } from '@chakra-ui/react'
import FeedPost from './feed-post'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

export default function FeedPosts () {
  const { isLoading, posts } = useGetFeedPosts()
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
    {/* {
      isLoading &&
        [1, 2, 3].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={4} alignItems={'center'}>
            <SkeletonCircle size={9}/>
            <VStack>
              <Skeleton h={5} w={'160px'}/>
            </VStack>
          </Flex>
          <Skeleton h={600} w={'full'} borderRadius={6}/>
        </VStack>
        ))} */}
    { (!isLoading && posts.length > 0) && posts.map(post => (
      // console.log(posts)
      <FeedPost key={post.id} post={post} isLoading={isLoading}/>
    ))
    }
    </Container>

  )
}
