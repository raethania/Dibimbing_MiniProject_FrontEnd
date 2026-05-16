import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

export default function Service() {
  return (
    <section className='grid grid-cols-3 gap-4 mb-30 py-10' id="service">
      {/* Label : Technology Learning */}
      <p className="text-zinc-600 col-span-full">Technology learning</p>      

      {/* Title */}
      <div className='col-span-2 pr-30'>
        <h2 className="leading-[63.36px] font-semibold">Build future-ready skills through immersive online courses</h2>
      </div>

      {/* Discover Now Section */}
      <div className='pl-10'>
        <p className='mb-5 text-[22px]'>Build future-ready skills through immersive online courses designed for creators</p>
        <Link to="register" className='button-primary flex-1 mr-5 w-1/2' target="_blank">Discover Now</Link>
      </div>

      {/* Skills Card */}
      <div className='w-full h-full bg-gray-100 min-h-102.75 rounded-2xl p-8 flex flex-col justify-between'>
        <div className="flex justify-between items-center">
          <FaStar className="bg-neutral-800 p-2 box-content rounded-full" color="#ffffff" size={15}/>
          <span className="text-zinc-600 bg-white rounded-full py-2 px-8">Skills</span>
        </div>
        <p className="text-neutral-800 text-[22px]">Online course platform</p>
      </div>
      <div className='w-full h-full bg-gray-100 min-h-102.75 rounded-2xl p-8 flex flex-col justify-between'>
        <div className="flex justify-between items-center">
          <FaStar className="bg-neutral-800 p-2 box-content rounded-full" color="#ffffff" size={15}/>
          <span className="text-zinc-600 bg-white rounded-full py-2 px-8">Skills</span>
        </div>
        <p className="text-neutral-800 text-[22px]">Online course platform</p>
      </div>
      <div className='w-full h-full bg-gray-100 min-h-102.75 rounded-2xl p-8 flex flex-col justify-between'>
        <div className="flex justify-between items-center">
          <FaStar className="bg-neutral-800 p-2 box-content rounded-full" color="#ffffff" size={15}/>
          <span className="text-zinc-600 bg-white rounded-full py-2 px-8">Skills</span>
        </div>
        <p className="text-neutral-800 text-[22px]">Online course platform</p>
      </div>
    </section>
  )
}
