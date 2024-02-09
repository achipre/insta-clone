import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import ProfileHeader from '../../components/ProfileHeader/profile-header'
import ProfileTabs from '../../components/ProfileHeader/profile-tabs'
import ProfilePosts from '../../components/ProfileHeader/profile-posts'
import useGetProfileByUsername from '../../hooks/useGetProfileByUsername'
import { useParams, Link as RouterLink } from 'react-router-dom'

export default function ProfilePage () {
  const { username } = useParams()
  const { isLoading, userProfile } = useGetProfileByUsername(username)
  const userNotFound = !isLoading && !userProfile
  if (userNotFound) return <UserNotFoundComponent />
  return (
    <Container
      maxW={'container.lg'}
      py={5}
      >
      <Flex py={10}>

        {(!isLoading && userProfile) && <ProfileHeader />}
        {(isLoading) && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex direction={'column'} borderTop={'1px solid'} borderColor={'gray.700'}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  )
}

function ProfileHeaderSkeleton () {
  return (
    <Flex gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      >
      <SkeletonCircle size={24} />
      <VStack alignItems={{ base: 'center', sm: 'flex-start' }} gap={2} mx={'auto'} flex={1}>
        <Skeleton h={'12px'} w={'150px'}/>
        <Skeleton h={'12px'} w={'150px'}/>
      </VStack>
    </Flex>
  )
}
function UserNotFoundComponent () {
  return (
    <Flex direction={'column'} textAlign={'center'} justifyContent={'center'} h={'calc(100vh - 120px)'} mx={'auto'}>
      <Text fontSize={'2xl'}>
        User Not found

      </Text>
      <Link as={RouterLink} to={'/'} color={'blue.500'} w={'max-content'} mx={'auto'}>
      Go Home
      </Link>

    </Flex>
  )
}
