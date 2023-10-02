import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import RightBar from '../../components/RightBar'
import { AiFillPlusSquare } from 'react-icons/ai'
import Diani from '../../assets/diani.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";


function Support() {
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
    };
    
  const flights=[1,2,3]


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
                    <div className=''>
                      <div>
                        <form className='flex flex-row gap-8'>
                          
                          <input placeholder='Search FAQs' className='py-2 px-3 w-[70%] rounded-xl'/>
                          <button type='submit' className='p-2 bg-[#2166e3] w-[30%] rounded-xl'>
                            Search 
                          </button>
                        </form>
                      </div>
                      
                    </div>

                    <div className='flex flex-col gap-4'>
                      <p>Recent Tickets</p>
                      <div className='flex flex-wrap gap-4 '>
                          {flights.map((flight,index)=>{
                            return <Link to={`/flights/${index}`}  className='md:w-[32%] w-[100%] p-2 bg-white rounded-xl'>
                                     
                                      <div className='flex flex-col gap-1 py-2'>
                                        <p className='text-sm font-semibold py-2'>Flight cancellation issue</p>
                                        <div>
                                          <p className='text-sm'>10 Sep 2023</p>
                                        </div>
                                        <div className='flex flex-row ml-auto'>
                                          <p className='text-sm px-4 py-2 bg-pink-300 rounded-full'>Closed </p>
                                          
                                        </div>
                                      </div>
                                    </Link>
                          })}
                      </div>
                      <button className='py-2 flex px-4 bg-[#2166e3] w-48 md:w-[20%] rounded-xl'>
                        <p className='mx-auto'>Create a new ticket</p>
                      </button>
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

export default Support