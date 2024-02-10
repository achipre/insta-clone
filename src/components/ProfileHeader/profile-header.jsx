import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import { useUserProfileStore } from '../../store/useProfileStore'
import { useAuthStore } from '../../store/authStore'
import EditProfileModal from './EditProfileModal'
import useFollowUser from '../../hooks/useFollowUser'

export default function ProfileHeader () {
  const { userProfile } = useUserProfileStore()
  const authUser = useAuthStore(state => state.user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isUpdate, isFollowing, handleFollowUser } = useFollowUser(userProfile?.uid)

  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username
  const visitingOtherProfileAndAuth = authUser && authUser.username !== userProfile.username

  return (
    <Flex gap={{ base: 2, md: 10 }} direction={{ base: 'column', md: 'row' }} mx={{ base: 0, md: 18 }} >
      {/* Avatar */}
      <AvatarGroup size={{ base: 'xl', sm: '2xl' }} justifyContent={'center'}>
        <Avatar
          name={userProfile.fullname}
          src={userProfile.profilePicture}
          alt={userProfile.username}
        />
      </AvatarGroup>
      {/* Biographic */}
      <VStack alignItems={'flex-start'} gap={2}>
        <Flex gap={{ base: 3, md: 6 }} alignItems={'center'} justifyContent={{ base: 'center', md: 'flex-start' }} w={'full'}>
          <Text fontWeight={600} cursor={'pointer'}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth &&
            <Button
              onClick={onOpen}
              size={'sm'}
              leftIcon={<MdEdit />}
              colorScheme="cyan"
              variant={'solid'}
              px={{ base: 2, md: 5 }}
              pr={{ base: 3, md: 8 }}
            >
              Edit
            </Button>
          }
          {isOpen && <EditProfileModal isOpen={isOpen} onClose={onClose} />}
          {visitingOtherProfileAndAuth &&
          <Button
          onClick={handleFollowUser}
          isLoading={isUpdate}
          size={'sm'}
          colorScheme="cyan"
          variant={'solid'}
          px={{ base: 2, md: 6 }}
          pr={{ base: 2, md: 6 }}
        >
          {isFollowing ? 'UnFollow' : 'Follow' }
        </Button>
          }
        </Flex>
        <Flex columnGap={{ base: 3, md: 6 }} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', md: 'flex-start' }} w={'full'}>
          <Text fontWeight={600} cursor={'pointer'} >
            {userProfile.posts.length}
            <Text as={'span'} fontWeight={'300'} ml={1}>posts</Text>
          </Text>
          <Text fontWeight={600} cursor={'pointer'}>
            {userProfile.followers.length}
            <Text as={'span'} fontWeight={'300'} ml={1}>followers</Text>
          </Text>
          <Text fontWeight={600} cursor={'pointer'}>
            {userProfile.following.length}
            <Text as={'span'} fontWeight={'300'} ml={1}>following</Text>
          </Text>
        </Flex>
        <Flex direction={'column'} >
          <Text fontWeight={600}>
            {userProfile.fullname}
          </Text>
          <Text fontSize={14} textOverflow={'ellipsis'} >
            {userProfile.bio}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
