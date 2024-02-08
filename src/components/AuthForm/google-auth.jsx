import { Box, Flex, Image } from '@chakra-ui/react'
import { auth, firestore } from '../../firebase/firebase'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useAuthStore } from '../../store/authStore'
import useShowToast from '../../hooks/useShowToast'
import { doc, setDoc } from 'firebase/firestore'

export default function GoogleAuth ({ prefix }) {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth)

  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state.login)

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if (!newUser && error) {
        return showToast('Error', error.message, 'error')
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullname: newUser.user.displayName,
          bio: '',
          profilePicture: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createAt: Date.now()
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
        showToast('Exito', 'User successfully created', 'success')
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return (
    <Flex mb={4} gap={4} alignItems={'center'} cursor={'pointer'} onClick={handleGoogleAuth}>
      <Image src='./logoGoogle.png' w={'32px'} />
      <Box color={'blue.300'}>{prefix} with Google</Box>
    </Flex>
  )
}
