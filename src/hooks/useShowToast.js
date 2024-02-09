import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

export default function useShowToast () {
  const toast = useToast()

  // useCalback is used to prevent the infinite loop, by caching the function
  const showToast = useCallback((title, description, status) => {
    toast({
      title,
      description,
      status,
      position: 'bottom-right',
      duration: 2000,
      isClosable: true
    })
  }, [toast])

  return showToast
}
