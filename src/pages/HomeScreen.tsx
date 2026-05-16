import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { FaBook, FaUser, FaGraduationCap  } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import type { ReactNode } from "react";

export default function HomeScreen() {
  type navbarType = {
    name : string,
    logo : ReactNode,
    active : boolean
  }

  const navbarItem : navbarType[] = [
    {
        name : "Dashboard",
        logo : <MdDashboard color="#99a1af" size={22}/>,
        active : true
    },
    {
        name : "All Course",
        logo : <FaGraduationCap color="#99a1af" size={22}/>,
        active : false
    },
    {
        name : "My Learning",
        logo : <FaBook color="#99a1af" size={22}/>,
        active : false
    },
    {
        name : "Profile",
        logo : <FaUser  color="#99a1af" size={22}/>,
        active : false
    },
  ]

  return (
    <div className='block md:flex'>
        {/* NAVBAR : PC */}
        <div className="md:flex hidden flex-col gap-5 w-80 p-5 md:border-r md:border-gray-200">
            <div>
                <h4 className="text-blue-950 mb-2">UpSkill</h4>
                <p>Momentum for Learners</p>
            </div>

            {
                navbarItem.map((item)=>{
                    return <div className="flex gap-4 items-center py-4 px-2">
                        {item.logo}
                        {item.name}
                    </div>
                })
            }
        </div>
        
        {/* RIGHT SECTION */}
        <div className="flex-1">
            {/* Header */}
            <header className='flex justify-between p-5 md:border-b md:border-gray-200'>
                <div className=''>
                    <p>Welcome Back-!</p>
                    <h4>Albert Fores</h4>
                </div>
                <div className='flex items-center'>
                    <div className="w-10 h-10 bg-neutral-200 rounded-full my-auto"/>
                </div>
            </header>
            
            {/* Content */}
            <div className="md:bg-gray-100 p-5">
                {/* Search Bar */}
                <div className="flex gap-10 mb-6">
                    <div className='flex p-3 bg-white rounded-[50px] items-center gap-2 flex-1'>
                        <IoIosSearch size={20} color="#4a5565"/>
                        <input type="text" name="" id="" placeholder='Search any course' className="w-full"/>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-full">
                        <VscSettings size={20} color="#4a5565"/>
                    </div>
                </div>

                {/* Promo Card */}
                <div className="px-5 py-6 bg-neutral-800 rounded-xl flex items-center gap-5 mb-6 md:h-70">
                    <div className="flex-2 flex flex-col justify-start items-start gap-2 md:self-stretch md:gap-5 md:justify-center shrink-0">
                        <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                            <div className="justify-start text-white text-[10px] font-normal tracking-tight">Ongoing</div>
                            <div className="w-1 h-1 bg-white rounded-full" />
                            <div className="justify-start text-white text-[10px] font-normal tracking-tight">22/32</div>
                        </div>
                        <div className="self-stretch pb-2 flex flex-col justify-start items-start gap-3">
                            <h5 className="text-white">Basic UI/UX Designer</h5>
                            <p className="text-white">Larasati Putri Maharani</p>
                        </div>
                        <button className="text-center justify-center text-white text-[10px] font-semibold leading-5 bg-indigo-600 rounded-full px-4 py-1">Checkout</button>
                    </div>
                    <div className="min-w-20 min-h-20 bg-white flex-1">

                    </div>
                </div>

                {/* Categories */}
                <section className="mb-6">
                    <div className="flex justify-between mb-5">
                        <h4>Categories</h4>
                        <a href=""><p>See all</p></a>
                    </div>

                    <div className="flex gap-4 overflow-x-auto">
                        {
                            Array.from({length: 4}).map((_)=>(
                                <div>
                                    <div className="w-14 h-14 md:w-20 md:h-20 bg-red-300 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-center gap-2 overflow-hidden"></div>
                                    <p className="text-center">Design</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
                
                {/* Recommended Course */}
                <section className="mb-6">
                    <div className="flex justify-between mb-5">
                        <h4>Recommend Course</h4>
                        <a href=""><p>See all</p></a>
                    </div>

                <div className="flex gap-5 overflow-x-auto">
                    {
                        Array.from({length: 2}).map((_, i)=>(
                            <div key={i} className="min-w-64 max-w-80 flex-1 bg-white rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.07)] flex flex-col overflow-hidden">
                                <div className="w-full h-48 bg-red-600">
                                </div>
                                <div className="p-5 gap-0.5 flex justify-between">
                                    <div>
                                        <div className="text-neutral-800 text-base font-semibold leading-6">Albert Flores</div>
                                        <div className="inline-flex items-center gap-1">
                                            <div className="text-zinc-500 text-xs font-normal leading-5 tracking-tight">Created by natealex</div>
                                        </div>
                                    </div>
                                    <div className="text-indigo-600 text-xl font-semibold leading-7 self-center">$56</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </section>
            </div>

        </div>
        
        {/* NAVBAR : IPAD & HANDPHONE */}
        <div className="flex justify-between fixed bottom-0 left-0 right-0 bg-white py-5 px-7 border-t-gray-200 border-t md:hidden">
            {
                navbarItem.map((item)=>{
                    return <div className="cursor-pointer">{item.logo}</div>
                })
            }
        </div>
    </div>
  )
}
