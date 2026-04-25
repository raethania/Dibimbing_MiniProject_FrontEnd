import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/api.ts'

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const role = "student"

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
      setMessage("");
      setError("");

      try {
        const response = await api.post('auth/register/', {
          name,
          email, 
          password,
          role
        })

        setMessage("Register berhasil. Silakan login.");
        console.log("REGISTER SUCCESS:", response.data);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch(err: any) {
          console.log("REGISTER ERROR:", err.response?.data);

          setError(
            err.response?.data?.message || "Register gagal. Periksa kembali data."
          );
      }
    
  }

  return (
    <div className='h-dvh w-dvw p-3'>
      <div className='flex max-w-400 gap-10 h-full mx-auto'>
        <div className='flex-1 self-center mx-5'>
          <div className='mb-10'>
            <h1 className='text-center'>Create a New Account</h1>
            <p>Please enter your details.</p>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <form onSubmit={handleRegister} className='flex flex-col'>

            <label htmlFor="name">Name</label> 
            <input type="text" name="name" id="name" placeholder='Enter name' className='input-form' value={name} onChange={e => setName(e.target.value)}/>

            <label htmlFor="email">Email Address</label> 
            <input type="email" name="email" id="email" placeholder='Enter email address' className='input-form' value={email} onChange={e => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label> 
            <input type="password" name="password" id="password" placeholder='Enter password address' className='input-form' value={password} onChange={e => setPassword(e.target.value)}/>

            <input type="submit" value={"login"} className='submit'/>
          </form>
          <p className='mt-5'>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>

        <div className='hidden md:block flex-1 rounded-lg bg-gray-400'>
        
        </div>
      </div>
    </div>
  )
}
