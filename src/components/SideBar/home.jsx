import { Link, Text, Tooltip } from '@chakra-ui/react'
import { GoHomeFill } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'

export default function Home () {
  return (
    <Tooltip
      hasArrow
      label={'Home'}
      placement='right'
      display={{ base: 'block', md: 'none' }}
      aria-label='A tooltip'
      openDelay={150} >
      <Link
        as={RouterLink}
        to={'/'}
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
        <GoHomeFill size={32} />
        <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Home</Text>
      </Link>
    </Tooltip>
  )
}
