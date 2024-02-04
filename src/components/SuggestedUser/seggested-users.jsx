import { Flex, Text, VStack } from '@chakra-ui/react'
import SuggestedUser from './suggested-user'
import SuggestedHeader from './suggested-header'

export default function SuggestedUsers () {
  return (
    <VStack py={12} px={6} gap={6}>
      <SuggestedHeader />
      <Flex justifyContent={'space-between'} w={'full'}>
          <Text fontSize={14} fontWeight={600} color={'gray'}>Syggested for you</Text>
          <Text fontSize={12} fontWeight={600} color={'cyan.300'} cursor={'pointer'} _hover={{ color: 'white' }} transition={'ease-in-out .35s'}>See All</Text>
      </Flex>
      <Flex direction={'column'} w={'full'} gap={4}>
        <SuggestedUser avatar={'https://github.com/achipre.png'} username={'fitnessgirl_'} followers={1234} />
        <SuggestedUser avatar={'./img-profile3.jpeg'} username={'girlyoga90'} followers={672} />
        <SuggestedUser avatar={'./img-profile4.jpeg'} username={'cosplaygirl69'} followers={923} />
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
