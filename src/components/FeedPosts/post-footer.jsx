import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { FaRegCommentAlt } from 'react-icons/fa'
import usePostComment from '../../hooks/usePostComments'
import { useAuthStore } from '../../store/authStore'

export default function PostFooter ({ post, username, isProfilePicture }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(1000)
  const [comment, setComment] = useState('')
  const { isCommenting, handlePostComment } = usePostComment()
  const authUser = useAuthStore(state => state.user)

  // focus input comment
  const inputCommentRef = useRef(null)
  const focusInputComment = () => {
    inputCommentRef.current.focus()
  }

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

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
    <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={2} my={1}>
        <Box
          onClick={handleLike}
          cursor={'pointer'}
          _hover={{ opacity: liked ? null : '.7' }}

          >
          {!liked
            ? <GoHeart size={28} />
            : <GoHeartFill size={28}/>}
        </Box>
        <Box cursor={'pointer'} _hover={''}>
          <FaRegCommentAlt size={24} onClick={focusInputComment} />

        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={18} my={1}>
        {likes} likes
      </Text>
      {!isProfilePicture && <Text cursor={'pointer'} fontWeight={600} fontSize={14} my={1} >
        {username}
        <Text as={'span'} fontWeight={300} ml={1}>
        Como estas yo excelente..!
        </Text>
      </Text>}

      <Text cursor={'pointer'} fontSize={14} my={2} color={'gray'}>
        View all the comments
      </Text>
      {authUser &&
        <Flex mb={6} justifyItems={'center'} alignItems={'center'}>
          <InputGroup alignItems={'center'}>
            <Input ref={inputCommentRef} placeholder='Add a comment...' size={'sm'} variant={'flushed'} my={2} value={comment} onChange={(e) => setComment(e.target.value)}/>
            <InputRightElement>
              <Button
                onClick={handleSubmitComment}
                isLoading={isCommenting}
                cursor={'pointer'} fontSize={14} variant={'ghost'} color={'cyan.400'} fontWeight={600} _hover={{ color: 'white' }} bg={'transparent'} _active={{ bg: 'transparent' }}>Post</Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      }
    </Box>
  )
}
