import { Container, Flex, Text } from '@chakra-ui/react'
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
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => (
          <FeedPost key={post.id} post={post} isLoading={isLoading} />
        ))}
      {!isLoading &&
        posts.length < 1 && (
          <Flex direction={'column'} h={'calc(100vh - 124px)'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'2xl'} color={'red.400'}>
              Lo siento no tienes amigos
            </Text>
            <Text fontSize={'2xl'} color={'red.400'}>Deja de Codear y haz algunos amigos.</Text>
          </Flex>
      )}
    </Container>
  )
}
