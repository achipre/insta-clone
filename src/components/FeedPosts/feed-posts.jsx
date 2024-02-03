import { Container } from '@chakra-ui/react'
import FeedPost from './feed-post'

export default function FeedPosts () {
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      <FeedPost img={'./img-profile.jpeg'} username={'girlgeek123'} avatar={'./img-profile.jpeg'}/>
      <FeedPost img={'./img-profile2.jpeg'} username={'fitnessgirl_'} avatar={'./img-profile2.jpeg'}/>
      <FeedPost img={'./img-profile3.jpeg'} username={'girlyoga90'} avatar={'./img-profile2.jpeg'}/>
      <FeedPost img={'./img-profile4.jpeg'} username={'cosplaygirl69'} avatar={'./img-profile2.jpeg'}/>
    </Container>
  )
}
