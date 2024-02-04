import React, { useEffect, useState } from 'react'
import ProfilePost from './profile-post'
import { Grid, Skeleton, VStack } from '@chakra-ui/react'

export default function ProfilePosts () {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 2000)
  }, [])

  return (
  <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={2}>
    {isLoading
      ? [0, 1, 2, 3, 4, 5].map((_, idx) => (
      <VStack key={idx}>
        <Skeleton w={'full'} aspectRatio={1}/>
      </VStack>
        ))
      : <>
        <ProfilePost img={'https://img.fotocommunity.com/toskana-fruehling-941d8ee7-00cf-47ac-a44e-2ef042b1803c.jpg?height=1080'} />
        <ProfilePost img={'./img-profile2.jpeg'} />
        <ProfilePost img={'https://i.pinimg.com/originals/b6/9d/f2/b69df2d896511d5e4c10c3ede49fcc8f.jpg'}/>
        <ProfilePost img={'./img-profile4.jpeg'}/>
    </>}
  </Grid>
  )
}
