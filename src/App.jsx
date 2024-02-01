import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/home-page'
import LoginPage from './pages/Login/login-page'

export function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </>
  )
}
