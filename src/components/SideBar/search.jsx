import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import useSearchUser from '../../hooks/useSearchUser'
import { useRef } from 'react'
import SuggestedUser from '../SuggestedUser/suggested-user'

export default function Search () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const searchRef = useRef(null)
  const { user, isLoading, getUserProfile, setUser } = useSearchUser()

  const handleSearchUser = (e) => {
    e.preventDefault()
    getUserProfile(searchRef.current.value)
  }
  return (
    <>
      <Tooltip
        hasArrow
        label={'Search'}
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
          gap={6}
          w={'full'}
          p={2}
          px={3}
          borderRadius={6}
          _hover={{ bg: 'whiteAlpha.300' }}>
          <FiSearch size={32} />
          <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Search</Text>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FiSearch />
                </InputLeftElement>
                  <Input placeholder='usuario' ref={searchRef} />
                </InputGroup>
              </FormControl>
              <Flex my={6}>
                <Button type='submit' colorScheme='green' isLoading={isLoading}>Search</Button>
              </Flex>
            </form>
            <Box mb={4}>
              {user && <SuggestedUser user={user} setUser={setUser}/>}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
