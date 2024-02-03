import { Box, Container, Flex } from '@chakra-ui/react'
import FeedPosts from '../../components/FeedPosts/feed-posts'

export default function HomePage () {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={3} py={10}
        >
          <FeedPosts />

        </Box>
        <Box flex={1} mr={20}
          display={{ base: 'none', lg: 'block' }}
        >
          Suggest

        </Box>
      </Flex>
    </Container>
  )
}
