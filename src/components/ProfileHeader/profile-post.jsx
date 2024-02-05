import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { FaComment } from 'react-icons/fa6'
import { TiHeartFullOutline } from 'react-icons/ti'

import { MdDelete } from 'react-icons/md'
import CommentPost from '../CommentPost/comment-post'
import PostFooter from '../FeedPosts/post-footer'

export default function ProfilePost ({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <GridItem onClick={onOpen} cursor={'pointer'} borderRadius={4} aspectRatio={1} position={'relative'} overflow={'hidden'}>
        <Flex opacity={0} bg={'blackAlpha.600'} _hover={{ opacity: 1 }} position={'absolute'} w={'full'} h={'100%'} top={0} justifyContent={'center'} alignItems={'center'} gap={6} transition={'ease-in-out .3s'}>
          <Flex gap={2}>
            <FaComment size={28} />
            <Text fontWeight={600}>7</Text>
          </Flex>
          <Flex gap={2}>
            <TiHeartFullOutline size={28} />
            <Text fontWeight={600}>7</Text>
          </Flex>

        </Flex>
        <Image src={img} aspectRatio={1} objectFit={'cover'} />

      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'full', md: '4xl' }} >
        <ModalContent borderRadius={4} >
          <ModalCloseButton />
          <ModalBody p={0} bg={'#0F0F0F'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={6} overflow={'hidden'} >
            <Flex h={'90vh'} >
              <Box flex={1.5} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'sticky'} >
                <Image src={img} h={'full'} w={'full'} objectFit={'contain'} />
              </Box>
              <Flex flex={1} overflow={'hidden'} direction={'column'} mx={{ base: 10, md: 12 }} ml={{ base: 4, md: 5 }} display={{ base: 'none', md: 'flex' }} >
                <Flex justifyContent={'space-between'} alignItems={'center'} py={2} pb={6} >
                  <Flex alignItems={'center'} gap={2} >
                    <Avatar src='./img-profile.jpeg' size={'sm'}/>
                    <Text cursor={'pointer'} color={'white'} fontWeight={600} fontSize={14} >useralex</Text>
                  </Flex>

                  <Box _hover={{ bg: 'whiteAlpha.200', color: 'red.300' }} p={1.5} borderRadius={4} cursor={'pointer'}>
                    <MdDelete size={20}/>
                  </Box>
                </Flex>
                <Divider />
                <VStack gap={4} pt={8} overflow={'hidden'} maxH={'80vh'} overflowY={'scroll'}>
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />
                  <CommentPost
                    createAt={'1d ago'}
                    username='fitnesgril69'
                    profilePicture='./img-profile2.jpeg'
                    text='Dummy igae is of an Unplash como se sabe que es verdad. ⭐️'
                  />
                  <CommentPost
                    createAt={'12h ago'}
                    username='womanyoga8296'
                    profilePicture='./img-profile3.jpeg'
                    text='Imagen color splash an variaty como lo sabemos de aui en adelante ⛑️'
                  />
                  <CommentPost
                    createAt={'3w ago'}
                    username='cosplaytech2910'
                    profilePicture='./img-profile4.jpeg'
                    text='Google space virtual ❤️❤️❤️'
                  />

                </VStack>
                <Box mt={'auto'}>
                  <Divider mb={4} />

                  <PostFooter isProfilePicture={true} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>

      </Modal>
    </>

  )
}
