import React from 'react'

import { Link } from 'react-router-dom';
import Logo from '../assets/japaLogo.png';
import Plane from '../assets/plane.png'


function Home() {

  return (
    <div className='mt-2 w-[94%] bg-[#101139] flex items-center mx-auto pt-5 pb-8 mt-3 rounded-xl md:h-[90vh]' id="home">
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-[50%] flex flex-col'>
                <div className='mx-auto flex flex-col w-[97%]  md:w-[80%]'>
                    <p className='md:text-4xl text-xl text-center md:text-left text-white  pt-8 pb-5 '>
                       Connecting Destinations , Connecting People. Explore, Book, and Go!
                     </p>

                    
                    <div className='mx-auto md:mx-0 flex flex-row gap-4' >
                        <Link to='/register' className=' my-4 px-4 py-2 bg-[#fff] rounded-full text-[#101139]'>
                            Sign Up Now
                        </Link>
                        
                        <Link to='#' className=' my-4 px-4 py-2 text-white border border-white rounded-full'>
                            Find Out More
                        </Link>
                    </div>
                    <p className='text-white mt-8'>LOrem ipsum dolor adue more ipsum dolor adue more 
                    ipsum dolor adue more ipsum dolor adue more</p>
                
                    
                </div>

            </div>
            <div className='md:w-[50%] flex  items-center mx-auto '>
                <div className='border border-4 border-white  w-[70%]  md:w-[85%] mx-auto'>
                    <img src={Plane} className='scale-150'/>
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Home