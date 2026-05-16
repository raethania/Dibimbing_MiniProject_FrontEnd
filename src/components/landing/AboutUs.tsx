import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function AboutUs() {
  return (
    <section className='grid grid-cols-3 w-full h-117 mb-50 py-10' id="about">

      {/* Section Label & Pagination */}
      <div className='flex flex-col justify-between'>

        {/* Section Label */}
        <div>
          <span className='inline-block bg-hotpink h-5 w-5 rounded-full align-sub mr-5'></span>
          <span className='text-[16px] inline-block'>ABOUT US</span>
        </div>

        {/* Category Badge & Pagination Controls */}
        <div className="flex justify-between">
          <span className='text-[16px] inline-block px-9 py-1 rounded-full bg-gray-200 mb-5'>Online Learning</span>
          <div className="flex gap-3 items-center">
            <IoIosArrowBack className="cursor-pointer" color="#636363"/>
            <span className="text-zinc-600">1/3</span>
            <IoIosArrowForward className="cursor-pointer" color="#636363"/>
          </div>
        </div>

      </div>

      {/* Section Heading */}
      <div className='col-span-2 box-border ml-20'>
        <h2 className="leading-[63.36px] font-semibold">
          Master New Skills Anytime Anywhere{" "}
          <span className="text-zinc-600">With Flexible Online Courses Worldwide</span>
        </h2>
      </div>

      {/* Stats */}
      <div className='flex flex-col justify-end border-t-2 border-zinc-600/80'>
        <p className="text-[42px] text-indigo-700">50+</p>
        <p className="text-zinc-600 text-[22px]">Learn new skills anytime.</p>
      </div>

      {/* Feature Cards */}
      <div className="col-span-2 flex justify-between gap-3 ml-20">

        {/* Card: Skill Development */}
        <div className="flex-1 bg-zinc-100 rounded-3xl p-5 flex flex-col gap-5 justify-center">
          <div className="w-15 h-11 bg-white"></div>
          <p className="text-neutral-800 text-[20px]">Skill <br /> Developement</p>
        </div>

        {/* Card: Skill Development */}
        <div className="flex-1 bg-zinc-100 rounded-3xl p-5 flex flex-col gap-5 justify-center">
          <div className="w-15 h-11 bg-white"></div>
          <p className="text-neutral-800 text-[20px]">Skill <br /> Developement</p>
        </div>

        {/* Card: Skill Development */}
        <div className="flex-1 bg-zinc-100 rounded-3xl p-5 flex flex-col gap-5 justify-center">
          <div className="w-15 h-11 bg-white"></div>
          <p className="text-neutral-800 text-[20px]">Skill <br /> Developement</p>
        </div>

      </div>

    </section>
  )
}