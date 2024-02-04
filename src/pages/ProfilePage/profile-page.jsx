import { Container, Flex } from '@chakra-ui/react'
import ProfileHeader from '../../components/ProfileHeader/profile-header'
import ProfileTabs from '../../components/ProfileHeader/profile-tabs'
import ProfilePosts from '../../components/ProfileHeader/profile-posts'

export default function ProfilePage () {
  return (
    <Container
      maxW={'container.lg'}
      py={5}
      >
      <Flex py={10}>
        <ProfileHeader />
      </Flex>
      <Flex direction={'column'} borderTop={'1px solid'} borderColor={'gray.700'}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  )
}
