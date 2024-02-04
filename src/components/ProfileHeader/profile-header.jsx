import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'

export default function ProfileHeader () {
  return (
    <Flex gap={{ base: 2, md: 10 }} direction={{ base: 'column', md: 'row' }} mx={{ base: 0, md: 18 }} >
      {/* Avatar */}
      <AvatarGroup size={{ base: 'xl', sm: '2xl' }} justifyContent={'center'}>
        <Avatar
          name="Alex Chipre"
          src="https://github.com/achipre.png"
          alt={'Profile Photo'}
        />
      </AvatarGroup>
      {/* Biographic */}
      <VStack alignItems={'flex-start'} gap={2}>
        <Flex gap={{ base: 3, md: 6 }} alignItems={'center'} justifyContent={{ base: 'center', md: 'flex-start' }} w={'full'}>
          <Text fontWeight={600} cursor={'pointer'}>
            username12689
          </Text>
          <Button
            size={'sm'}
            leftIcon={<MdEdit />}
            colorScheme="cyan"
            variant={'solid'}
            px={{ base: 2, md: 5 }}
            pr={{ base: 3, md: 8 }}
          >
            Edit
          </Button>
        </Flex>
        <Flex columnGap={{ base: 3, md: 6 }} alignItems={'center'} flexWrap={'wrap'} justifyContent={{ base: 'center', md: 'flex-start' }} w={'full'}>
          <Text fontWeight={600} cursor={'pointer'} >
            1,825
            <Text as={'span'} fontWeight={'300'} ml={1}>posts</Text>
          </Text>
          <Text fontWeight={600} cursor={'pointer'}>
            1.1M
            <Text as={'span'} fontWeight={'300'} ml={1}>followers</Text>
          </Text>
          <Text fontWeight={600} cursor={'pointer'}>
            16
            <Text as={'span'} fontWeight={'300'} ml={1}>following</Text>
          </Text>
        </Flex>
        <Flex direction={'column'} >
          <Text fontWeight={600}>
            programmerBeginner
          </Text>
          <Text fontSize={14} textOverflow={'ellipsis'} >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga labore consectetur, molestiae voluptate repellendus eveniet amet laudantium dolor.
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
