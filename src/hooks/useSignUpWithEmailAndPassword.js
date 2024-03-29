import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import useShowToast from './useShowToast'
import { useAuthStore } from '../store/authStore'

export default function useSignUpWithEmailAndPassword () {
  const [
    createUserWithEmailAndPassword, ,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth)
  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state.login)

  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
      showToast('Error', 'Please fill all the field', 'error')
      return
    }
    // Consulta de usuario
    const usersRef = query(collection(firestore, 'users'), where('username', '==', inputs.username))
    const querySnapshot = await getDocs(usersRef)
    if (!querySnapshot.empty) {
      showToast('Error', 'username no disponible', 'info')
      return
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        if (error.code === 'auth/email-already-in-use') {
          showToast('Error', 'Correo ya registrado', 'error')
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
        loginUser(userDoc)
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
