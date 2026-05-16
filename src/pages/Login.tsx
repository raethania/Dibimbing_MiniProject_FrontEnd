import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/api';
import useAuth from "../../hooks/useAuth";


export default function Login() {
  const navigate = useNavigate();
  const {login} = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();
        setMessage("");
        setError("");
  
        try {
          const response = await api.post('auth/login/', {
            email, 
            password
          })
          const token =  response.data.data.token;
          login(token);
  
          setMessage("Login berhasil.");
          console.log("LOGIN SUCCESS:", response.data);
  
  
          setTimeout(() => {
            navigate("/user");
          }, 1000);
        } catch(err: any) {
            console.log("REGISTER ERROR:", err.response?.data);
  
            setError(
              err.response?.data?.message || "Register gagal. Periksa kembali data."
            );
        }
      
    }

  return (
    <div className='p-3 h-dvh w-dvw'>
      {/* Center Container */}
      <div className='flex h-full gap-10 mx-auto max-w-400'>
        {/* Form Section */}
        <div className='self-center flex-1 mx-5'>
          <div className='mb-10'>
            <h1 className='text-center mb-4'>Welcome Back</h1>
            <p className='text-center'>Please enter your details.</p>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <form onSubmit={handleLogin} className='flex flex-col'>
            <label htmlFor="email">Email Address</label> 
            <input type="email" name="email" id="email" placeholder='Enter email address' className='input-form' value={email} onChange={e => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label> 
            <input type="password" name="password" id="password" placeholder='Enter password address' className='input-form' value={password} onChange={e => setPassword(e.target.value)}/>

            <input type="submit" value={"login"} className='submit'/>
          </form>
          <p className='mt-5'>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>

        {/* Image Section */}
        <div className='flex-1 hidden bg-gray-400 rounded-lg md:block'>
        
        </div>
      </div>
    </div>
  )
}
