import { Flex, Text } from '@chakra-ui/react'
import { BsGrid3X3 } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { FaRegBookmark } from 'react-icons/fa6'

export default function ProfileTabs () {
  return (
    <Flex justifyContent={'center'} w={'full'} gap={4}>
      <Flex borderTop={'1px solid white'} p={2} cursor={'pointer'} gap={2} alignItems={'center'}>
        <BsGrid3X3 size={24} />
        <Text>POST</Text>
      </Flex>
      <Flex p={2} cursor={'pointer'} gap={2} alignItems={'center'}>
        <FiHeart size={24}/>
        <Text>SAVE</Text>
      </Flex>
      <Flex p={2} cursor={'pointer'} gap={2} alignItems={'center'}>
        <FaRegBookmark size={24}/>
        <Text>LIKES</Text>
      </Flex>

    </Flex>
  )
}
