import { Image } from '@chakra-ui/react'
import PostFooter from './post-footer'
import PostHeader from './post-header'

export default function FeedPost () {
  return (
    <>
      <PostHeader />
      <Image src='./img-profile.jpeg' w={'full'}/>
      <PostFooter />
    </>

  )
}
