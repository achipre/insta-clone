import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function SuggestedUser ({ avatar, username, followers }) {
  const [isFollowed, setIsFollowed] = useState(false)
  const [isFollowes, setIsFollowes] = useState(followers)
  const handleFollower = () => {
    if (isFollowed) {
      setIsFollowed(false)
      setIsFollowes(isFollowes - 1)
    } else {
      setIsFollowed(true)
      setIsFollowes(isFollowes + 1)
    }
  }
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <Flex gap={2} >
        <Avatar name={username} src={avatar}/>
        <Flex direction={'column'} justifyContent={'center'}>
          <Text fontWeight={600} fontSize={14}>{username}</Text>
          <Text fontSize={14} color={'gray'}>{isFollowes} followers</Text>
        </Flex>
      </Flex>
      <Button onClick={handleFollower}
        variant={'link'} fontWeight={600} fontSize={12}
        color={isFollowed ? 'white' : 'cyan.400'} transition={'ease-in-out .35s'}
        _hover={{ textDecoration: 'none', color: isFollowed ? 'cyan.400' : 'white' }}
        >{isFollowed ? 'Unfollowed' : 'Follower'}
      </Button>
    </Flex>
  )
}
