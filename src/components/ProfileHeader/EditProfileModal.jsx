import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import usePreviewImg from '../../hooks/usePreviewImg'
import useEditProfile from '../../hooks/useEditProfile'
import useShowToast from '../../hooks/useShowToast'

export default function UserProfileEdit ({ isOpen, onClose }) {
  const showToast = useShowToast()
  const authUser = useAuthStore((state) => state.user)
  const [inputs, setInputs] = useState({
    fullname: '' || authUser.fullname,
    username: '' || authUser.username,
    bio: '' || authUser.bio

  })

  const fileRef = useRef(null)

  const { selectedFile, handleImgChange, setSelectedFile } = usePreviewImg()
  // Update Profile
  const { editProfile, isUpdating } = useEditProfile()
  const handleEditProfile = async () => {
    try {
      await editProfile(inputs, selectedFile)
      setSelectedFile(null)
      onClose()
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} minW={'268px'} isCentered size={{ base: 'full', sm: 'md' }}>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} pb={2}>User Profile Edit</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={'flex'} alignItems={'center'} >
          <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          pt={1}
          >
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={selectedFile || authUser.profilePicture}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button onClick={() => fileRef.current.click()} w="full">Edit profile picture</Button>
                <Input type='file' ref={fileRef} onChange={handleImgChange} hidden/>
              </Center>
            </Stack>
          </FormControl>
          <FormControl>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="Username"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              placeholder="Full Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}

            />
          </FormControl>
          <FormControl>
            <FormLabel>Biography</FormLabel>
            <Input
              placeholder="Biography"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={inputs.bio}
              onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              onClick={onClose}
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500'
              }}>
              Cancel
            </Button>
            <Button
              onClick={handleEditProfile}
              isLoading={isUpdating}
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500'
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
