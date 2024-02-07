import { Box, Flex, Spinner } from '@chakra-ui/react'
import Sidebar from '../../components/SideBar/sidebar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/navbar'

export default function PageLayout ({ children }) {
  const [user, loading] = useAuthState(auth)
  console.log(user)
  const { pathname } = useLocation()
  const canRenderSidebar = pathname !== '/login' && user
  const canRenderNavbar = !user && !loading && pathname !== '/login'

  const checkingUserIsAuth = !user && loading
  if (checkingUserIsAuth) return <PageLayoutSpinner />

  return (
    <Flex direction={canRenderNavbar ? 'column' : 'row'}>
      {/* Sidebar Left */}
      {
        canRenderSidebar
          ? (
          <Box w={{ base: '70px', md: '220px' }}>
            <Sidebar />
          </Box>
            )
          : null
      }
      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* Page content on the Right */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px' }}>
        {children}
      </Box>
    </Flex>
  )
}

function PageLayoutSpinner () {
  return (
    <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'} direction={'column'}>
      <Spinner size={'xl'} />
    </Flex>
  )
}
