import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/home-page'
import LoginPage from './pages/Login/login-page'
import PageLayout from './Layout/PageLayout/page-layout'
import ProfilePage from './pages/ProfilePage/profile-page'

export function App () {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}
