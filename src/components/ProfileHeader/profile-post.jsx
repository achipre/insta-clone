import { Box, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, Text, useDisclosure } from '@chakra-ui/react'
import { FaComment } from 'react-icons/fa6'
import { TiHeartFullOutline } from 'react-icons/ti'

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
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'4xl'}>
        <ModalContent borderRadius={4} overflow={'hidden'}>
          <ModalCloseButton />
            <ModalBody p={0} bg={'#0F0F0F'}>
              <Flex>
                <Box h={'80vh'} flex={1.5} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                  <Image src={img} h={'full'} w={'full'} objectFit={'contain'} />
                </Box>
                <Box flex={1}>
                  <Text color={'white'}>useralex</Text>
                </Box>
              </Flex>
            </ModalBody>
            {/* <ModalBody p={0} bg={'#0F0F0F'}>
            </ModalBody> */}
        </ModalContent>

      </Modal>
    </>

  )
}
