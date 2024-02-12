import { Box, Flex, Text, Link, Tooltip, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { LogoPhotoGram } from '../../assets/components'
import useLogout from '../../hooks/useLogout'
import SidebarItems from './sidebar-items'
import { IoExit } from 'react-icons/io5'

export default function Sidebar () {
  const { handleLogout, loading } = useLogout()
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
          <SidebarItems />
        </Flex>
        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label={'Logout'}
          placement='right'
          display={{ base: 'block', md: 'none' }}
          aria-label='A tooltip'
          openDelay={150} >
          <Flex
            onClick={handleLogout}
            cursor={'pointer'}
            display={'flex'}
            flexDirection={'row'}
            gap={6}
            w={'full'}
            mt={'auto'}
            borderRadius={6}>
            <Button
              px={{ base: '0', md: 'auto' }}
              pl={{ base: '14px', md: 0 }}
              bg={'transparent'} w={'full'} alignItems={'center'} justifyContent={'space-around' } isLoading={loading} leftIcon={<IoExit size={28} />} display={'flex'} fontWeight={600}>
              <Text display={{ base: 'none', md: 'flex' }}>Logout</Text></Button>
          </Flex>
        </Tooltip>
      </Flex>

    </Box>
  )
}
