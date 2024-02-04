import { Image } from '@chakra-ui/react'
import PostFooter from './post-footer'
import PostHeader from './post-header'

export default function FeedPost ({ username, avatar, img }) {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
        <Image borderRadius={6} src={img} w={'full'} alt={username} />
      <PostFooter username={username} />
    </>

  )
}
