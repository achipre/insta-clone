import { Box, Container, Flex } from '@chakra-ui/react'
import FeedPosts from '../../components/FeedPosts/feed-posts'
import SuggestedUsers from '../../components/SuggestedUser/seggested-users'

export default function HomePage () {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={3} pt={1} pb={10} mx={'auto'} maxW={'600px'}
        >
          <FeedPosts />

        </Box>
        <Box flex={2} mr={10} minW={'280px'}
          display={{ base: 'none', xl: 'block' }}
        >
          <SuggestedUsers />

        </Box>
      </Flex>
    </Container>
  )
}
