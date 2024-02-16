import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import CommentPost from '../components/CommentPost/comment-post'
import usePostComment from '../hooks/usePostComments'

export default function CommentModal ({ isOpen, onClose, post }) {
  const { handlePostComment, isCommenting } = usePostComment()
  const commentRef = useRef(null)
  const commentContainerRef = useRef(null)
  const handleSubmitComment = async (e) => {
    e.preventDefault()
    await handlePostComment(post.id, commentRef.current.value)
    commentRef.current.value = ''
  }

  useEffect(() => {
    const scrollToBotton = () => {
      commentContainerRef.current.scrollTop = commentContainerRef.current.scrollHeight
    }
    if (isOpen) {
      setTimeout(() => {
        scrollToBotton()
      }, 100)
    }
  }, [isOpen, post.comments.length])

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Commets</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            mb={4}
            gap={4}
            flexDir={'column'}
            maxH={'250px'}
            overflowY={'auto'}
            ref={commentContainerRef}
          >
            {post.comments.map((comment, idx) => (
            <CommentPost key={idx} comment={comment} />
            ))}
          </Flex>
          <form
          onSubmit={handleSubmitComment}
            style={{ marginTop: '2rem' }}>
            <Input placeholder="Comment" size={'sm'} ref={commentRef}/>
            <Flex w={'full'} justifyContent={'flex-end'}>
              <Button
              isLoading={isCommenting}
                colorScheme="blue" type="submit" ml={'auto'} size={'sm'} my={4}>
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>

      </ModalContent>
    </Modal>
  )
}
