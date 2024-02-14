import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import { usePostStore } from '../store/postStore'
import { useUserProfileStore } from '../store/useProfileStore'
import useShowToast from '../hooks/useShowToast'

export default function useGetUserPosts () {
  const [isLoading, setIsLoading] = useState(true)
  const { posts, setPosts } = usePostStore()
  const showToast = useShowToast()
  const userPorfile = useUserProfileStore(state => state.userProfile)

  useEffect(() => {
    const getPosts = async () => {
      if (!userPorfile) return
      setIsLoading(false)
      setPosts([])

      try {
        const q = query(collection(firestore, 'posts'), where('createBy', '==', userPorfile.uid))
        const querySnapshot = await getDocs(q)

        const posts = []
        querySnapshot.forEach(doc => {
          posts.push({ ...doc.data(), id: doc.id })
        })
        posts.sort((a, b) => b.createAt - a.createAt)
        setPosts(posts)
      } catch (error) {
        showToast('Error', error.message, 'error')
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    getPosts()
  }, [setPosts, userPorfile, showToast])

  return { isLoading, posts }
}
