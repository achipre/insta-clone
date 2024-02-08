import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/home-page'
import LoginPage from './pages/Login/login-page'
import PageLayout from './Layout/PageLayout/page-layout'
import ProfilePage from './pages/ProfilePage/profile-page'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'

export function App () {
  const [authUser] = useAuthState(auth)
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={ authUser ? <HomePage /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={'/'} />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}
