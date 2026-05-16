import React from 'react'
import { Link } from 'react-router'

export default function Banner() {
  return (
    // Container
    <div className='bg-zinc-100 rounded-[40px] w-full h-3/5 left-0 absolute flex justify-center items-center flex-col'>
        <p className=' text-neutral-800 text-5xl font-medium leading-[63.36px] text-center mb-12'>Our online courses are built to help <br /> you grow faster, smarter, and <br /> stronger.</p>
        <Link to="register" className='button-primary w-full max-w-50' target='_blank'>Discover Now</Link>
    </div>
  )
}
