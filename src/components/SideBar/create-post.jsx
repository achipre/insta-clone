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
import { BsCardImage } from 'react-icons/bs'
import { SiAddthis } from 'react-icons/si'
import usePreviewImg from '../../hooks/usePreviewImg'

export default function CreatePost () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [caption, setCaption] = useState('')
  const { selectedFile, handleImgChange, setSelectedFile } = usePreviewImg()
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
            <Button colorScheme='blue' onClick={onClose}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
