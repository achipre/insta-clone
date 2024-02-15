import { Image, Skeleton } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
// import PostFooter from './post-footer'
import PostHeader from './post-header'

export default function FeedPost ({ post, isLoading }) {
  const { userProfile } = useGetUserProfileById(post.createBy)
  console.log(isLoading)
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      {post ? <Image aspectRatio={507 / 600} borderRadius={6} src={post.imageURL} w={'full'} h={600} objectFit={'contain'} alt={post.caption} /> : <Skeleton h={600} w={'full'} borderRadius={6}/> }
      {/* <PostFooter creatorProfile={userProfile} /> */}
    </>
  )
}
