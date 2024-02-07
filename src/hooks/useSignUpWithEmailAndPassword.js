import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import useShowToast from './useShowToast'

export default function useSignUpWithEmailAndPassword () {
  const [
    createUserWithEmailAndPassword, ,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth)

  const showToast = useShowToast()
  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
      showToast('Error', 'Please fill all the field', 'error')
      return
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        if (error.code === 'auth/email-already-in-use') {
          showToast('Error', 'Usuario ya registrado', 'error')
        }
        return
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: '',
          profilePicture: '',
          followers: [],
          following: [],
          posts: [],
          createAt: Date.now()
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        showToast('Exito', 'User successfully created', 'success')
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showToast('Error', 'Usuario ya registrado', 'error')
      }
    }
  }

  return { loading, error, signup }
}
