import React from 'react'
import Avatar from "../assets/avatar.png"

function Testimonials() {
  return (
    <div className='w-[94%] mx-auto pb-5 pt-5 mt-5  items-center' id="testimonials">
      <div className='flex flex-col mx-auto'>
        <p className='py-2 text-2xl font-semibold mx-auto'>Testimonials</p>
        <p className='text-gray-700 py-2 mx-auto'>What some of our clients are saying about us</p>

      </div>
      <div className='pt-5 flex flex-col gap-8 md:flex-row '>
        <div className=' border rounded-2xl p-2  border-gray-200 md:w-[32%]'>
            <div className='flex flex-row gap-2 py-3'>
                <img className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy" />
                <div className='pt-1 flex flex-col justify-end'>
                    <p className=' text'>Darel Oballa</p>
                    <p className='text-gray-700 text-sm'>Flight KQAIQO1 Passenger</p>
                </div>
            </div>
          

          <p className='py-2 w-[94%]'>Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor
          Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet  
            </p>
          
        </div>

        <div className=' border rounded-2xl p-2  border-gray-200 md:w-[32%]'>
            <div className='flex flex-row gap-2 py-3'>
                <img className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy" />
                <div className='pt-1 flex flex-col justify-end'>
                    <p className=' text'>Darel Oballa</p>
                    <p className='text-gray-700 text-sm'>Flight KQAIQO1 Passenger</p>
                </div>
            </div>
          

          <p className='py-2 w-[94%]'>Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor
          Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet
            </p>
          
        </div>

        <div className=' border rounded-2xl p-2  border-gray-200 md:w-[33%]'>
            <div className='flex flex-row gap-2 py-3'>
                <img className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={Avatar} alt="Bordered avatar" loading="lazy" />
                <div className='pt-1 flex flex-col justify-end'>
                    <p className=' text'>Darel Oballa</p>
                    <p className='text-gray-700 text-sm'>Flight KQAIQO1 Passenger</p>
                </div>
            </div>
          

          <p className='py-2 w-[94%]'>Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet mor
          Lorem ipsum dolor amuet mor Lorem ipsum dolor amuet 
            </p>
          
        </div>

      </div>

      

    </div>
  )
}

export default Testimonials