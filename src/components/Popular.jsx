import React from 'react'
import { Link } from 'react-router-dom';

import Diani from '../assets/diani.jpg'

function Popular() {
    return (
        <div className='w-[94%] mx-auto pt-5 mt-5 items-center' id="services">

            <div className='flex flex-col gap-6'>
                <div className='mx-auto md:w-[70%] text-center'>
                    <p className='md:text-2xl text-xl font-bold py-4'>Popular Destinations</p>
                    <p className='text-gray-800 pb-2'>
                        Lorem ipsum doet dolor amuet  Lorem ipsum doet dolor amuet Lorem 
                        ipsum doet dolor amuet Lorem ipsum doet dolor amuet
                    </p>
                </div>
                <div className=''>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-[32%] flex flex-col gap-2 px-2 bg-white rounded-xl  '>

                            <img src={Diani} className='w-[98%] rounded-xl' />
                            <div className='flex flex-col gap-1 py-2'>
                                <p className='text-sm text-black-500'>Diani Beach</p>
                                <div>
                                    <p className='text-sm'>JKIA Aiport</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-semibold text-sm'>12 Sep 2023, 1400Hrs</p>
                                    <p className='font-semibold text-sm'>$400</p>
                                </div>
                            </div>
                            <Link to='/login' className='py-2 px-4 flex w-32 rounded-xl bg-[#2166e3]'>
                                <p className='mx-auto'>Check Out</p>
                            </Link>

                        </div>
                        <div className='md:w-[32%] p-2 bg-white rounded-xl  '>

                            <img src={Diani} className='w-[98%] rounded-xl' />
                            <div className='flex flex-col gap-1 py-2'>
                                <p className='text-sm text-black-500'>Diani Beach</p>
                                <div>
                                    <p className='text-sm'>JKIA Aiport</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-semibold text-sm'>12 Sep 2023, 1400Hrs</p>
                                    <p className='font-semibold text-sm'>$400</p>
                                </div>
                            </div>
                            <Link to='/login' className='py-2 px-4 flex w-32 rounded-xl bg-[#2166e3]'>
                                <p className='mx-auto'>Check Out</p>
                            </Link>

                        </div>
                        <div className='md:w-[32%] p-2 bg-white rounded-xl  '>

                            <img src={Diani} className='w-[98%] rounded-xl' />
                            <div className='flex flex-col gap-1 py-2'>
                                <p className='text-sm text-black-500'>Diani Beach</p>
                                <div>
                                    <p className='text-sm'>JKIA Aiport</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <p className='font-semibold text-sm'>12 Sep 2023, 1400Hrs</p>
                                    <p className='font-semibold text-sm'>$400</p>
                                </div>
                            </div>
                            <Link to='/login' className='py-2 px-4 flex w-32 rounded-xl bg-[#2166e3]'>
                                <p className='mx-auto'>Check Out</p>
                            </Link>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Popular;