import { ThemeProvider } from "@material-tailwind/react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider } from '../context/AuthContext'
import User from './pages/User'
User


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/user" element={<User/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
