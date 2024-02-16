import {
  Flex, Modal, Text, Tooltip, useDisclosure, ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Input,
  Icon,
  Image,
  CloseButton
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { firestore, storage } from '../../firebase/firebase'
import { BsCardImage } from 'react-icons/bs'
import { SiAddthis } from 'react-icons/si'
import usePreviewImg from '../../hooks/usePreviewImg'
import useShowToast from '../../hooks/useShowToast'
import { useAuthStore } from '../../store/authStore'
import { usePostStore } from '../../store/postStore'
import { useUserProfileStore } from '../../store/useProfileStore'
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { useLocation } from 'react-router-dom'

export default function CreatePost () {
  const showToast = useShowToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [caption, setCaption] = useState('')
  const { selectedFile, handleImgChange, setSelectedFile } = usePreviewImg()
  const { isLoading, handleCreatePost } = useCreatePost()

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption)
      onClose()
      setCaption('')
      setSelectedFile(null)
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  const imageRef = useRef(null)

  return (
    <>
      <Tooltip
        hasArrow
        label={'Create'}
        placement='right'
        display={{ base: 'block', md: 'none' }}
        aria-label='A tooltip'
        openDelay={150} >
        <Flex
          onClick={onOpen}
          cursor={'pointer'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          ml={'2px'}
          gap={6}
          w={'full'}
          p={2}
          px={3}
          borderRadius={6}
          _hover={{ bg: 'whiteAlpha.300' }}>
          <SiAddthis size={28} />
          <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Create</Text>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea placeholder='Post caption..' resize={'none'} _focusVisible={{ border: '1px solid gray' }} value={caption} onChange={(e) => setCaption(e.target.value)}/>
            <Input type='file' hidden ref={imageRef} onChange={handleImgChange} />
            <Icon onClick={() => imageRef.current.click() } as={BsCardImage} color={'cyan.300'} cursor={'pointer'} fontSize={28} m={2} mb={1} ml={0}/>
            {selectedFile && (
              <Flex position={'relative'}>
                <Image src={selectedFile} alt='Imagen Uploaded' borderRadius={6} />
                <CloseButton position={'absolute'} top={0} right={0} onClick={() => setSelectedFile('')} />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter pt={0}>
            <Button onClick={handlePostCreation} isLoading={isLoading} colorScheme='blue' >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function useCreatePost () {
  const showToast = useShowToast()
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthStore(state => state.user)
  const createPost = usePostStore(state => state.createPost)
  const addPost = useUserProfileStore(state => state.addPost)
  const userProfile = useUserProfileStore(state => state.userProfile)
  const { pathname } = useLocation()

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return
    if (!selectedFile) return showToast('Error', 'Please Upload a Imagen', 'error')
    setIsLoading(true)
    const newPost = {
      caption,
      likes: [],
      comments: [],
      createAt: Date.now(),
      createBy: authUser.uid
    }
    try {
      const postDocRef = await addDoc(collection(firestore, 'posts'), newPost)
      const userDocRef = doc(firestore, 'users', authUser.uid)
      const imgRef = ref(storage, `posts/${postDocRef.id}`)

      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) })
      await uploadString(imgRef, selectedFile, 'data_url')
      const downloadURL = await getDownloadURL(imgRef)

      await updateDoc(postDocRef, { imageURL: downloadURL })

      newPost.imageURL = downloadURL

      if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id })
      if (pathname !== '/' && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id })

      showToast('Success', 'Subida de Post Exitosa', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }
  return { isLoading, handleCreatePost }
}
