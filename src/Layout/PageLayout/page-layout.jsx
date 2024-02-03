import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../../components/SideBar/sidebar'
import { useLocation } from 'react-router-dom'

export default function PageLayout ({ children }) {
  const { pathname } = useLocation()
  return (
    <Flex>
      {/* Sidebar Left */}
      {
        pathname !== '/login' && (
          <Box w={{ base: '70px', md: '240px' }}>
            <Sidebar />
          </Box>
        )
      }

      {/* Page content on the Right */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px' }}>
        {children}
      </Box>
    </Flex>
  )
}
