import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from '../context/AuthContext'
import HomeScreen from './pages/HomeScreen'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/home" element={<HomeScreen/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
)
