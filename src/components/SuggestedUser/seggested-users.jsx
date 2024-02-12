import { Flex, Text, VStack } from '@chakra-ui/react'
import SuggestedUser from './suggested-user'
import SuggestedHeader from './suggested-header'
import useGetSuggestedUser from '../../hooks/useGetSuggestUser'

export default function SuggestedUsers () {
  const { isLoading, suggestedUsers } = useGetSuggestedUser()
  // option: render loading skeleton
  if (isLoading) return null

  return (
    <VStack py={12} px={6} gap={6}>
      <SuggestedHeader />
      <Flex justifyContent={'space-between'} w={'full'}>
          <Text fontSize={14} fontWeight={600} color={'gray'}>Syggested for you</Text>
          <Text fontSize={12} fontWeight={600} color={'cyan.300'} cursor={'pointer'} _hover={{ color: 'white' }} transition={'ease-in-out .35s'}>See All</Text>
      </Flex>
      <Flex direction={'column'} w={'full'} gap={4}>
        {suggestedUsers.map(user => <SuggestedUser user={user} key={user.uid}/>)}
      </Flex>
      <Text
        w={'full'}
        fontSize={12}
        color={'gray'}

      >
      © 2024 PHOTOGRAM FROM CHIPREDEV
      </Text>
    </VStack>

  )
}
