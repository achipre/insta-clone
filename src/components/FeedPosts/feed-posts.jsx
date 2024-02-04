import { Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './feed-post'
import { useEffect, useState } from 'react'

export default function FeedPosts () {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
    {
      isLoading
        ? [1, 2, 3, 4].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={4} alignItems={'center'}>
            <SkeletonCircle size={9}/>
            <VStack>
              <Skeleton h={5} w={'160px'}/>
            </VStack>
          </Flex>
          <Skeleton h={600} w={'full'} borderRadius={6}/>

        </VStack>
          ))
        : <>
      <FeedPost img={'./img-profile.jpeg'} username={'girlgeek123'} avatar={'./img-profile.jpeg'}/>
      <FeedPost img={'./img-profile2.jpeg'} username={'fitnessgirl_'} avatar={'./img-profile2.jpeg'}/>
      <FeedPost img={'./img-profile3.jpeg'} username={'girlyoga90'} avatar={'./img-profile2.jpeg'}/>
      <FeedPost img={'./img-profile4.jpeg'} username={'cosplaygirl69'} avatar={'./img-profile2.jpeg'}/>
      </>
    }
    </Container>

  )
}
