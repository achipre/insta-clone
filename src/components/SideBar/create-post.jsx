import { Flex, Text, Tooltip } from '@chakra-ui/react'
import { SiAddthis } from 'react-icons/si'
export default function CreatePost () {
  return (
    <Tooltip
      hasArrow
      label={'Create'}
      placement='right'
      display={{ base: 'block', md: 'none' }}
      aria-label='A tooltip'
      openDelay={150} >
      <Flex
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
  )
}
