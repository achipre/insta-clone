import { Avatar, Link, Text, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

export default function ProfileLink () {
  const authUser = useAuthStore(state => state.user)
  return (
    <Tooltip
      hasArrow
      label={'Profile'}
      placement='right'
      display={{ base: 'block', md: 'none' }}
      aria-label='A tooltip'
      openDelay={150} >
      <Link
        as={RouterLink}
        to={`/${authUser?.username}`}
        cursor={'pointer'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        gap={6}
        w={'full'}
        p={2}
        px={3}
        borderRadius={6}
        _hover={{ bg: 'whiteAlpha.300' }}>
        <Avatar w={'32px'} h={'32px'} name={authUser.fullname} src={authUser?.profilePicture || ''} />
        <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Profile</Text>
      </Link>
    </Tooltip>
  )
}
