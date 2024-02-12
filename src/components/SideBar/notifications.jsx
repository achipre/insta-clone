import { Flex, Text, Tooltip } from '@chakra-ui/react'
import { IoNotifications } from 'react-icons/io5'
export default function Notifications () {
  return (
    <Tooltip
      hasArrow
      label={'Notifications'}
      placement='right'
      display={{ base: 'block', md: 'none' }}
      aria-label='A tooltip'
      openDelay={150} >
      <Flex
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
        <IoNotifications size={32} />
        <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Notifications</Text>
      </Flex>
    </Tooltip>
  )
}
