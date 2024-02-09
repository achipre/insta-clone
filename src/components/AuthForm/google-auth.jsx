import { Box, Flex, Image } from '@chakra-ui/react'
import { auth, firestore } from '../../firebase/firebase'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useAuthStore } from '../../store/authStore'
import useShowToast from '../../hooks/useShowToast'
import { doc, getDoc, setDoc } from 'firebase/firestore'

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
      const userRef = doc(firestore, 'user-info', newUser.user.uid)
      const userSnap = await getDoc(userRef)
      if (userSnap.exists()) {
        // login
        const userDoc = userSnap.data()
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      } else {
        // sign up
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
