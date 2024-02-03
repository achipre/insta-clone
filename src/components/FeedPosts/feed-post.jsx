import { Image } from '@chakra-ui/react'
import PostFooter from './post-footer'
import PostHeader from './post-header'
import { useEffect, useState } from 'react'

export default function FeedPost ({ username, avatar, img }) {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <PostHeader username={username} avatar={avatar} />
        <Image borderRadius={6} src={img} w={'full'} alt={username} />
      <PostFooter username={username} />
    </>

  )
}
