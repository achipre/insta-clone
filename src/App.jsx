import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/home-page'
import LoginPage from './pages/Login/login-page'
import PageLayout from './Layout/PageLayout/page-layout'

export function App () {
  return (
    <PageLayout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </PageLayout>
  )
}
