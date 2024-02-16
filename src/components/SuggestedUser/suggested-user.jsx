import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import { useAuthStore } from '../../store/authStore'
import useFollowUser from '../../hooks/useFollowUser'
import { Link } from 'react-router-dom'

export default function SuggestedUser ({ user, setUser }) {
  const { isUpdate, isFollowing, handleFollowUser } = useFollowUser(user.uid)

  const authUser = useAuthStore(state => state.user)

  const onFollowUser = async () => {
    await handleFollowUser()
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((foll) => foll !== authUser.uid)
        : [...user.followers, authUser.uid]
    })
  }

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <Flex gap={2} >
        <Link to={`/${user.useranme}`}>
          <Avatar name={user.fullname} src={user.profilePicture}/>
        </Link>
        <Flex direction={'column'} justifyContent={'center'}>
          <Link to={`/${user.useranme}`}>
            <Text fontWeight={600} fontSize={14}>{user.fullname}</Text>
          </Link>
          <Text fontSize={14} color={'gray'}>{user.followers.length} followers</Text>
        </Flex>
      </Flex>
      {
        authUser.uid !== user.uid &&
          <Button onClick={onFollowUser}
              isLoading={isUpdate}
              cursor={authUser.uid === user.uid ? 'not-allowed' : 'pointer'}
              variant={'link'} fontWeight={600} fontSize={12}
              color={isFollowing ? 'white' : 'cyan.400'} transition={'ease-in-out .35s'}
              _hover={{ textDecoration: 'none', color: isFollowing ? 'cyan.400' : 'white' }}
              >{isFollowing ? 'Unfollowed' : 'Follower'}
            </Button>
      }
    </Flex>
  )
}
