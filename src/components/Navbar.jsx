import React,{useEffect,useState} from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };
    
  return (
    <header className='bg-white mt-1 w-[94%] mx-auto'>
        <nav className='flex justify-between items-center  '>
            <div className='flex flex-row items-center'>
                <Link to='/'>
                    JapaFast
                </Link>
            </div>
            <div className={`md:static md:min-h-fit absolute md:w-auto w-[94%] top-[15%] left-[3%] min-h-[60vh] flex justify-between
             left-0 md:block  ${menuOpen ? 'block  z-50' : 'hidden'} md:bg-white bg-[#3f418c] rounded  items-center px-5 transition-all duration-300`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8'>
                    
                    <li>
                        <a className='font-bold hover:text-[#019dec] text-slate-700' href='#services'>Popular</a>
                    </li>
                
                  
                    <Link to='/blog' className='font-bold hover:text-[#019dec] text-slate-700'>
                        About Us
                    </Link>
                    <Link to='/login' className='font-bold hover:text-[#019dec] text-slate-700'>
                        Login
                    </Link>
                    <Link to='/Signup' className='font-bold hover:text-[#019dec] text-white rounded-full text-slate-700 px-4 py-2 bg-[#101139]'>
                        Register
                    </Link>
                </ul>

            </div>
            

            <div className='block md:hidden md:z-0 '>
                
                {menuOpen ? (
                    <AiOutlineClose onClick={toggleMenu} />
                ) : (
                    <AiOutlineMenu onClick={toggleMenu} />
                )}
               
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar;