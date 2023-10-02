import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import Notification from '../assets/community.png'
import Avatar from '../assets/avatar.png'

function RightBar() {
    const trips = [1, 2, 3, 4]
    return (
        <div className='flex flex-col gap-4'>
            <div className='md:block hidden'>
                <div className='flex flex-row  gap-5'>
                    <div className='px-2 border border-gray-600 flex items-center rounded-2xl'>
                        <img className='w-8' src={Notification} />
                    </div>

                    <div className='px-2'>
                        <img className='w-12 rounded-full' src={Avatar} />
                    </div>
                    <div className='px-2'>
                        <p>Darel Oballa</p>
                    </div>
                </div>
            </div>


            <div className='grow  rounded-xl'>
                <p className='py-2 px-2 font-bold rounded-xl text-sm'>Trips History</p>

                <div className='flex flex-col gap-3 pt-5'>
                    {trips.map(() => {
                        return <div className='border flex flex-row border-gray-200 p-2 gap-4 rounded-xl'>
                            <img src={Avatar} className='w-14' />
                            <div className='flex flex-col items-center'>
                                <p className='font-semibold text-sm'>Diani Beach</p>
                                <p className='text-sm text-black-500'> 18 Sep, 2023 1400Hrs</p>
                            </div>

                        </div>
                    })}
                </div>


            </div>
        </div>
    )
}

export default RightBar