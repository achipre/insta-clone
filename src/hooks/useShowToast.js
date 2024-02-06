import { useToast } from '@chakra-ui/react'

export default function useShowToast () {
  const toast = useToast()
  const showToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      position: 'bottom-right',
      duration: 3000,
      isClosable: true
    })
  }

  return showToast
}
