import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { FaRegCommentAlt } from 'react-icons/fa'
import usePostComment from '../../hooks/usePostComments'
import { useAuthStore } from '../../store/authStore'
import useLikePost from '../../hooks/useLikePost'
import CommentModal from '../../Modals/comments-modal'

export default function PostFooter ({ post, isProfilePage, creatorProfile }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [comment, setComment] = useState('')
  const { isCommenting, handlePostComment } = usePostComment()
  const authUser = useAuthStore(state => state.user)
  const { likes, isLiked, handleLikePost } = useLikePost(post)

  // focus input comment
  const inputCommentRef = useRef(null)
  const focusInputComment = () => {
    inputCommentRef.current.focus()
  }

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

  return (
    <Box mb={10}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={2} my={1}>
        <Box
          onClick={handleLikePost}
          cursor={'pointer'}
          _hover={{ opacity: isLiked ? null : '.7' }}

          >
          {!isLiked
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
      {!isProfilePage && <Text cursor={'pointer'} fontWeight={600} fontSize={14} my={1} >
        {creatorProfile?.username}
        <Text as={'span'} fontWeight={300} ml={1}>
        {post.caption}
        </Text>
        <CommentModal onClose={onClose} isOpen={isOpen} post={post} />
      </Text>
      }

      {post.comments.length < 0
        ? <Text cursor={'pointer'} fontSize={14} my={2} color={'gray'}>
        No have commnets
      </Text>
        : <Text onClick={onOpen} cursor={'pointer'} fontSize={14} my={2} color={'gray'}>
        View all {post.comments.length} comments
      </Text>}
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
