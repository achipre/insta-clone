import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import React from 'react'

export default function CommentModal ({ isOpen, onClose, post }) {
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
          >
            {post.comments.map((comment, idx) => (
            <Text key={idx}>{comment.comment}</Text>
            ))}
          </Flex>
          <form style={{ marginTop: '2rem' }}>
            <Input placeholder="Comment" size={'sm'} />
            <Flex w={'full'} justifyContent={'flex-end'}>
              <Button colorScheme="blue" type="submit" ml={'auto'} size={'sm'} my={4}>
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>

      </ModalContent>
    </Modal>
  )
}
