import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useUserProfileStore } from '../store/useProfileStore'
import useShowToast from './useShowToast'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

export default function useFollowUser (userId) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const { user, setUser } = useAuthStore()
  const { userProfile, setUserProfile } = useUserProfileStore()
  const showToast = useShowToast()

  const handleFollowUser = async () => {
    setIsUpdate(true)
    try {
      const currentUserRef = doc(firestore, 'users', user.uid)
      const userToFollowOrUnFollowRef = doc(firestore, 'users', userId)

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
      })
      await updateDoc(userToFollowOrUnFollowRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid)
      })
      if (isFollowing) {
        setUser({
          ...user,
          following: user.following.filter(uid => uid !== userId)
        })
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter(uid => uid !== user.uid)
          })
        }
        localStorage.setItem('user-info', JSON.stringify({
          ...user,
          following: user.following.filter(uid => uid !== userId)
        }))
        setIsFollowing(false)
      } else {
        setUser({
          ...user,
          following: [...user.following, userId]
        })
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, user.uid]
          })
        }
        localStorage.setItem('user-info', JSON.stringify({
          ...user,
          following: [...user.following, userId]

        }))
        setIsFollowing(true)
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsUpdate(false)
    }
  }

  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(userId)
      setIsFollowing(isFollowing)
    }
  }, [userId, user])

  return { isUpdate, isFollowing, handleFollowUser }
}
