import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import RightBar from '../../components/RightBar'
import { AiFillPlusSquare } from 'react-icons/ai'
import Diani from '../../assets/diani.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

import FlightBookingForm from './FlightBookingForm'


function FlightDetails() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [bookFlight ,setBookFlight] = useState(false);

    const togglebookButton=()=>{
        setBookFlight(!bookFlight);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
    };
    
    const flights=[1,2,3,4,5,6]
   

  return (
    <div className='bg-white'>
      <div className='flex flex-col md:flex-row gap-4 '>
            <div className={`${menuOpen ? 'block  z-50' : 'hidden md:block'} `}>
              <Sidebar/>
            </div>
            
            <div className='md:w-[90%]'>
              
              <div className='flex flex-col md:flex-row overflow-y-auto gap-4'>
                  <div className='py-2 px-4 flex flex-col gap-8 md:w-[75%] bg-gray-100 rounded-2xl  ' >
                    <div className='flex flex-row justify-between'>
                        <div>
                            <p>Hello ,Darel !</p>
                            <p className='text-sm text-gray-500'>14 Aug 2023</p>
                        </div>

                        <div className='block md:hidden md:z-0 '>
                            {menuOpen ? (
                                <AiOutlineClose onClick={toggleMenu} />
                            ) : (
                                <AiOutlineMenu onClick={toggleMenu} />
                            )}
                        </div>
                        
                    </div>

                    <div className='flex flex-col gap-4'>

                        <p>Flight Details</p>
                        <div className='flex flex-col md:flex-row gap-8 '>

                            <div className='md:w-[48%] p-2 bg-white rounded-xl'>
                                <img src={Diani} className='w-[98%] rounded-xl'/>
                            
                            </div>

                            <div className='md:w-[48%] p-2  rounded-xl'>
                                <p className='py-2 font-semibold'>Flight KQAIOS9SD</p>
                                <div>
                                    <p className='text-sm py-2'>From : JKIA Aiport Nairobi</p>
                                </div>
                                <div>
                                    <p className='text-sm py-2'>To : Diani Mombasa</p>
                                </div>
                            
                                <div className='flex flex-col gap-1 py-2'>
                                    
                                    
                                    <div className='flex flex-row gap-8 py-2'>
                                    <p className='font-semibold text-sm'>12 Sep 2023</p>
                                    <p className='font-semibold text-sm'>1400Hrs EAT</p>
                                    </div>
                                </div>
                            </div>

                       
                        </div>
                        <div>
                            <div>
                                {bookFlight ? 
                                    <div>
                                    <FlightBookingForm/>
                                        <div className='flex flex-row gap-8'>
                                            <button onClick={togglebookButton} className='mt-4 px-4 py-2 bg-[#2166e3] rounded-xl'>
                                                Cancel
                                            </button>

                                            <button  className='mt-4 px-4 py-2 bg-[#2166e3] rounded-xl'>
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                     :

                                    <button onClick={togglebookButton} className='px-4 py-2 bg-[#2166e3] rounded-xl'>
                                        Book Flight
                                    </button> 
                                    
                                }
                            </div>
                        </div>
                      
                    </div>

                   
                           
                      
                  </div>
                  <div className='md:h-screen md:w-[25%] p-4 md:p-2' > 
                      <RightBar/>
                  </div>
              </div>
                
            </div>
      </div>
    </div>
  )
}

export default FlightDetails