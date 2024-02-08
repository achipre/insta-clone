import { Avatar, Button, Flex, Link, Text } from '@chakra-ui/react'
import useLogout from '../../hooks/useLogout'
import { useAuthStore } from '../../store/authStore'
import { Link as RouterLink } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '../../firebase/firebase'

export default function SuggestedHeader () {
  const { handleLogout, loading } = useLogout()
  const authUser = useAuthStore(state => state.user)
  if (!authUser) return null

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex gap={2} justifyContent={'center'}>
        <Link as={RouterLink} to={`/${authUser.username}`}>
          <Avatar name={authUser.fullname} src={authUser.profilePicture} alt={`Imagen del usuario ${authUser.fullname}`}/>
        </Link>

        <Flex direction={'column'} justifyContent={'center'}>
          <Link as={RouterLink} to={`/${authUser.username}`}>
            <Text fontWeight={600} fontSize={14}>{authUser.username}</Text>
          </Link>
          <Text fontSize={14} color={'gray'}>{authUser.fullname}</Text>
        </Flex>
      </Flex>
      <Button onClick={handleLogout} variant={'link'} _loading={loading} fontWeight={600} fontSize={12} color={'cyan.400'} transition={'ease-in-out .35s'} _hover={{ textDecoration: 'none', color: 'white' }}>Logout</Button>
    </Flex>
  )
}
