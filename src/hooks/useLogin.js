import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import useShowToast from './useShowToast'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthStore } from '../store/authStore'

export default function useLogin () {
  const [
    signInWithEmailAndPassword,
    ,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth)
  const loginUser = useAuthStore(state => state.login)

  const showToast = useShowToast()

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast('Error', 'Please fill the fields', 'error')
    }
    try {
      const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)
      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid)
        const docSnap = await getDoc(docRef)
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()))
        loginUser(docSnap.data())
      }
      if (error.code === 'auth/invalid-credential') {
        return showToast('Error', 'Password Invalida', 'error')
      }
      if (error.code === 'auth/too-many-requests') {
        return showToast('Error', 'Demasiados intentos incorrectos intente mas tarde', 'error')
      }
    } catch (error) {
    }
  }
  return { login, loading }
}
