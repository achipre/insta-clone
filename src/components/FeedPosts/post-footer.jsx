import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function PostFooter () {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }
  return (
    <>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={2} my={2}>
        <Box
          onClick={handleLike}
          cursor={'pointer'}
          _hover={{ opacity: liked ? null : '.7' }}

          >
          {!liked
            ? <GoHeart size={32} />
            : <GoHeartFill size={32}/>}
        </Box>
        <Box cursor={'pointer'} _hover={''}>
          <FaRegCommentAlt size={28} />

        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={18} my={2}>
        {likes} likes
      </Text>
      <Text cursor={'pointer'} fontWeight={600} fontSize={14} my={2} >
        programmer456:
        <Text as={'span'} fontWeight={300}>
        {'    '}Como estas yo excelente..!
        </Text>
      </Text>
      <Text cursor={'pointer'} fontSize={14} my={2} color={'gray'}>
        View all the comments
      </Text>
      <Flex mb={6} justifyContent={'space-between'}>
        <Input placeholder='Add a comment...' mb={2} size={'sm'} variant={'unstyled'}/>
        <Button cursor={'pointer'} fontSize={14} color={'cyan.400'} fontWeight={600} _hover={{ color: 'white' }}>Post</Button>
      </Flex>
    </>
  )
}
