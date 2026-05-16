import { Link } from "react-router"

export default function HeroSection() {
  return (
    <section className='mb-50' >

      {/* Title */}
      <div className='flex justify-between mb-16 py-10' id="home">
        <h1 className='text-[64px] font-semibold'>
          Your Gateway to{' '}
          <span className='bg-clip-text text-transparent bg-linear-to-l from-rose-400 to-indigo-700'>
            Digital <br /> Learning
          </span>
        </h1>
        <div className='self-end justify-end flex w-1/3 min-w-75'>
          <Link to="register" className='button-primary flex-1 mr-5' target="_blank">Discover Now</Link>
          <a href="/detail" className='button-secondry flex-1 mr-5'>See Details</a>
        </div>
      </div>

      {/* Hero Banner */}
      <div className='h-126.75 w-full bg-gray-100 rounded-4xl grid grid-cols-3 p-5 gap-3'>

        {/* User Avatars */}
        <div>
          <span className='bg-stone-300 h-10 w-10 rounded-full inline-block'></span>
          <span className='bg-stone-300 h-10 w-10 rounded-full inline-block -ml-4'></span>
          <span className='bg-stone-300 h-10 w-10 rounded-full inline-block -ml-4'></span>
        </div>

        {/* Stats Banner */}
        <div className='col-span-2 row-span-2 pl-5'>
          <div className='bg-gray-300 w-full h-full rounded-3xl flex flex-col justify-end items-end p-6 gap-6'>

            {/* Student Stats Card */}
            <div className='bg-white inline-block p-5 rounded-2xl w-full max-w-60'>
              <p className='text-sm text-zinc-500'>Students Worldwide</p>
              <p className='text-2xl font-bold'>120K+</p>
              <span className='bg-cyan-200 inline-block px-4.5 py-1 rounded-full text-sm'>+50%</span>
            </div>

            {/* Course Stats Card */}
            <div className='bg-white inline-block px-5 rounded-2xl py-5 w-full max-w-83'>
              <p className='text-sm text-zinc-500 mb-2'>Courses Available</p>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-2xl font-bold'>300+</p>
                <span className='bg-cyan-200 inline-block px-4.5 py-1 rounded-full text-sm'>+50%</span>
              </div>
              <div className='rounded-full bg-gray-400 h-3 w-full mb-2 relative overflow-hidden'>
                <div className='absolute w-1/5 h-full rounded-full bg-linear-to-r from-rose-400 to-indigo-700'></div>
              </div>
            </div>

          </div>
        </div>

        {/* Expert-Led Courses Card */}
        <div>
          <div className='border-2 border-solid rounded-3xl border-white h-full w-full flex flex-col gap-4 p-4'>
            <div>
              <p className='text-sm text-zinc-600'>Expert-Led Courses</p>
              <p className='text-2xl font-bold'>1500+</p>
            </div>
            <div className='flex-1 flex gap-4'>
              <div className='bg-white flex-1 rounded-xl h-1/4 self-end'></div>
              <div className='bg-white flex-1 rounded-xl h-2/4 self-end'></div>
              <div className='bg-white flex-1 rounded-xl h-3/4 self-end'></div>
              <div className='bg-linear-to-t from-rose-400 to-indigo-700 flex-1 rounded-xl h-full self-end'></div>
              <div className='bg-white flex-1 rounded-xl h-3/4 self-end'></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}