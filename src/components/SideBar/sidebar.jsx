import { Box, Flex, Text, Link, Tooltip, Avatar } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { LogoPhotoGram } from '../../assets/components'
import { GoHomeFill } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'
import { IoNotifications, IoExit } from 'react-icons/io5'
import { SiAddthis } from 'react-icons/si'

export default function Sidebar () {
  const sidebarIcons = [
    {
      icon: <GoHomeFill size={32} />,
      text: 'Home',
      link: '/'
    },
    {
      icon: <FiSearch size={32} />,
      text: 'Search'
    },
    {
      icon: <IoNotifications size={32} />,
      text: 'Notifications'
    },
    {
      icon: <SiAddthis size={28} />,
      text: 'Create'
    },
    {
      icon: <Avatar w={'32px'} h={'32px'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />,
      text: 'Avatar',
      link: '/asprofile'
    }
  ]
  return (
    <Box
      h={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={2}
      position={'fixed'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      pb={4}
    >
      <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} h={'100%'}>
        <Link to={'/'} as={RouterLink} display={{ base: 'none', md: 'block' }} cursor={'pointer'} _hover={{ textDecoration: 'none' }}>
          <Text
            as={'h1'}
            fontFamily={'Poppins'}
            // color={'white'}
            fontWeight={800}
            fontSize={'2rem'}
            my={5}
          >Photo
            <Box
              display={'inline-block'}
              // color={'#0D9276'}
              fontWeight={300}
            >Gram
            </Box>
          </Text>
        </Link>
        <Link to={'/'} as={RouterLink} display={{ base: 'block', md: 'none' }} my={6} cursor={'pointer'} _hover={{ textDecoration: 'none' }}>
          <LogoPhotoGram />
        </Link>
        <Flex
          direction={'column'}
          gap={6}
          justifyContent={'center'}
          mt={10}
          alignItems={{ base: 'center', md: 'flex-start' }}>
          {sidebarIcons.map((icon, idx) => (
            <Tooltip
              key={idx}
              hasArrow
              label={icon.text}
              placement='right'
              display={{ base: 'block', md: 'none' }}
              aria-label='A tooltip'
              openDelay={150} >
              <Link
                as={RouterLink}
                to={icon.link || null}
                cursor={'pointer'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                gap={6}
                ml={icon.text === 'Create' ? '2px' : 0}
                w={'full'}
                p={2}
                px={3}
                borderRadius={6}
                _hover={{ bg: 'whiteAlpha.300' }}>
                {icon.icon}
                <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>{icon.text}</Text>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={'Logout'}
          placement='right'
          display={{ base: 'block', md: 'none' }}
          aria-label='A tooltip'
          openDelay={150} >
          <Link
            as={RouterLink}
            to={'/login'}
            cursor={'pointer'}
            display={'flex'}
            flexDirection={'row'}
            // justifyContent={'center'}
            gap={6}
            w={'full'}
            mt={'auto'}
            p={2}
            px={3}
            pl={4}
            borderRadius={6}
            _hover={{ bg: 'whiteAlpha.300' }}>
              <IoExit size={28} />
            <Text display={{ base: 'none', md: 'block' }} fontWeight={600}>Logout</Text>
          </Link>
        </Tooltip>
      </Flex>

    </Box>
  )
}
