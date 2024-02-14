import { Avatar, Box, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { FaComment } from 'react-icons/fa6'
import { TiHeartFullOutline } from 'react-icons/ti'

import { MdDelete } from 'react-icons/md'
import CommentPost from '../CommentPost/comment-post'
import PostFooter from '../FeedPosts/post-footer'
import { useUserProfileStore } from '../../store/useProfileStore'
import { useAuthStore } from '../../store/authStore'
import { usePostStore } from '../../store/postStore'
import useShowToast from '../../hooks/useShowToast'
import { useState } from 'react'
import { deleteObject, ref } from 'firebase/storage'
import { firestore, storage } from '../../firebase/firebase'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'

export default function ProfilePost ({ post }) {
  console.log(post)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userProfile = useUserProfileStore(state => state.userProfile)
  const authUser = useAuthStore(state => state.user)
  const showToast = useShowToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const deletePost = usePostStore(state => state.deletePost)
  const countPosts = useUserProfileStore(state => state.deletePost)

  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want delete this post?')) return
    if (isDeleting) return
    try {
      //  delete Storage
      const imageRef = ref(storage, `posts/${post.id}`)
      await deleteObject(imageRef)
      // delete ref in DB
      const userRef = doc(firestore, 'users', authUser.uid)
      await deleteDoc(doc(firestore, 'posts', post.id))

      await updateDoc(userRef, {
        posts: arrayRemove(post.id)
      })
      deletePost(post.id)
      countPosts(post.id)
      showToast('Success', 'Post deleted Successfully', 'success')
      onClose()
    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsDeleting(false)
    }
  }
  return (
    <>
      <GridItem onClick={onOpen} cursor={'pointer'} borderRadius={4} aspectRatio={1} position={'relative'} overflow={'hidden'}>
        <Flex opacity={0} bg={'blackAlpha.600'} _hover={{ opacity: 1 }} position={'absolute'} w={'full'} h={'100%'} top={0} justifyContent={'center'} alignItems={'center'} gap={6} transition={'ease-in-out .3s'}>
          <Flex gap={2}>
            <FaComment size={28} />
            <Text fontWeight={600}>{post.comments.length}</Text>
          </Flex>
          <Flex gap={2}>
            <TiHeartFullOutline size={28} />
            <Text fontWeight={600}>{post.likes.length}</Text>
          </Flex>

        </Flex>
        <Image src={post.imageURL} aspectRatio={1} objectFit={'cover'} />

      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'full', md: '4xl' }} >
        <ModalContent borderRadius={4} >
          <ModalCloseButton />
          <ModalBody p={0} bg={'#0F0F0F'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={6} overflow={'hidden'} >
            <Flex h={'90vh'} >
              <Box flex={1.5} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'sticky'} >
                <Image src={post.imageURL} h={'full'} w={'full'} objectFit={'contain'} />
              </Box>
              <Flex flex={1} overflow={'hidden'} direction={'column'} display={{ base: 'none', md: 'flex' }} >
                <Flex justifyContent={'space-between'} alignItems={'center'} py={2} pb={6} mx={{ base: 10, md: 12 }} ml={{ base: 4, md: 5 }}>
                  <Flex alignItems={'center'} gap={2} >
                    <Avatar src={userProfile.profilePicture} size={'sm'}/>
                    <Text cursor={'pointer'} color={'white'} fontWeight={600} fontSize={14} >{userProfile.fullname}</Text>
                  </Flex>

                  {authUser.uid === userProfile.uid &&
                    <Button onClick={handleDeletePost} bg={'transparent'} isLoading={isDeleting} _hover={{ bg: 'whiteAlpha.200', color: 'red.300' }} p={0} size={'sm'} borderRadius={4} cursor={'pointer'}>
                      <MdDelete size={20}/>
                    </Button>
                  }
                </Flex>
                <Divider />
                <VStack gap={4} pt={8} overflow={'hidden'} maxH={'80vh'} overflowY={'scroll'} mx={{ base: 4, md: 5 }}>
                  {post.comments.map(comment => (
                    <CommentPost comment={comment} key={comment.id}/>
                  )
                  )}

                </VStack>
                {/* <Divider mb={4} /> */}
                <Box mt={'auto'} mx={{ base: 4, md: 5 }}>
                  <PostFooter post={post} isProfilePicture={true} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>

      </Modal>
    </>

  )
}
