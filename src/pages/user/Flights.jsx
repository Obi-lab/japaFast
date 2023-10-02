import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import RightBar from '../../components/RightBar'
import { AiFillPlusSquare } from 'react-icons/ai'
import Diani from '../../assets/diani.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";


function Flights() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                    <div className=''>
                      <div>
                        <form className='flex flex-row gap-8'>
                          
                          <input placeholder='Search Flights' className='py-2 px-3 w-[70%] rounded-xl'/>
                          <button type='submit' className='p-2 bg-[#2166e3] w-[30%] rounded-xl'>
                            Search
                          </button>
                        </form>
                      </div>
                      
                    </div>

                    <div className='flex flex-col gap-4'>
                      <p>All Flights</p>
                      <div className='flex flex-wrap gap-4 '>
                          {flights.map((flight,index)=>{
                            return <Link to={`/flights/${index}`}  className='md:w-[32%] p-2 bg-white rounded-xl'>
                                      <img src={Diani} className='w-[98%] rounded-xl'/>
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
                                    </Link>
                          })}
                      </div>
                      <Link className='py-2 flex px-4 bg-[#2166e3] w-32 md:w-[15%] rounded-xl'>
                        <p className='mx-auto'>Load More</p>
                      </Link>
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

export default Flights