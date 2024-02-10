import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { firestore, storage } from '../firebase/firebase'
import { useAuthStore } from '../store/authStore'
import useShowToast from './useShowToast'
import { useUserProfileStore } from '../store/useProfileStore'

export default function useEditProfile () {
  const [isUpdating, setUpdating] = useState(false)

  const authUser = useAuthStore(state => state.user)
  const setAuthUser = useAuthStore(state => state.setUser)
  const setUserProfile = useUserProfileStore(state => state.setUserProfile)

  const showToast = useShowToast()

  const editProfile = async (inputs, seletedFile) => {
    if (isUpdating || !authUser) return
    setUpdating(true)
    const storageRef = ref(storage, `profilePicture/${authUser.uid}`)
    const userDocRef = doc(firestore, 'users', authUser.uid)

    let URL = ''

    try {
      if (seletedFile) {
        await uploadString(storageRef, seletedFile, 'data_url')
        URL = await getDownloadURL(ref(storage, `profilePicture/${authUser.uid}`))
      }
      const updatedUser = {
        ...authUser,
        fullname: inputs.fullname || authUser.fullname,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicture: URL || authUser.profilePicture
      }

      await updateDoc(userDocRef, updatedUser)
      localStorage.setItem('user-info', JSON.stringify(updatedUser))
      setAuthUser(updatedUser)
      setUserProfile(updatedUser)
      showToast('Exito', 'Profile Updated Success', 'success')
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return { editProfile, isUpdating }
}
