import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast'
import { useAuthStore } from '../store/authStore'

export default function useLogout () {
  const [signOut, loading, error] = useSignOut(auth)
  const showToast = useShowToast()
  const logoutUser = useAuthStore(state => state.logout)

  const handleLogout = async () => {
    try {
      const success = await signOut()
      if (success) {
        showToast('Exito', 'You are sign out', 'success')
      }
      localStorage.removeItem('user-info')
      logoutUser()
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return { handleLogout, loading, error }
}
