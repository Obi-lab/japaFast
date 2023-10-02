import React,{useState} from 'react'

import { Link } from 'react-router-dom'



import { AiOutlineClockCircle ,AiOutlineLogout} from 'react-icons/ai'

import { AiOutlineDashboard, } from 'react-icons/ai'

function Sidebar() {
    
    
  return (
    <div className={`absolute md:static md:w-[12%] md:rounded-tl-2xl p-2 h-screen rounded-xl 
                    md:rounded-0 bg-[#2166e3] md:bg-white w-[80%]  `}>
        <div className='flex flex-col  h-[100%] justify-between'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-1 items-center mx-auto'>
                     
                    <p className=''>Japa<span>Fast</span></p>
                    <div>
                       
                    </div>
                </div>
                <div className='flex flex-col gap-2  mx-auto'>
                    <Link to='/dashboard' className='flex flex-row gap-2 items-center  text-sm'>
                        <AiOutlineDashboard size={20}/> Dashboard
                    </Link>
                    <Link to='/pendingFlighs' className='flex flex-row gap-2 items-center  text-sm'>
                        <AiOutlineClockCircle size={20}/> Pending
                    </Link>
                    <Link to='/history' className='flex flex-row gap-2 items-center  text-sm'>
                        <AiOutlineClockCircle size={20}/> History
                    </Link>
                    <Link to='/support' className='flex flex-row gap-2 items-center  text-sm'>
                        <AiOutlineClockCircle size={20} className=''/> Support
                    </Link>

                </div>
                
            </div>
            <div className='mx-auto'>
                <div className='mx-auto'>
                    <Link className='flex flex-row gap-2 items-center  text-sm'>
                        <AiOutlineLogout/> Log Out
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar