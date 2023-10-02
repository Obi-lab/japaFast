import React from 'react'
import Logo from '../assets/japaLogo.png';
import { Link } from 'react-router-dom';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Call from '../assets/call.png';
import Email from '../assets/email.png';
import WhatsApp from '../assets/whatsapp.png';

function Footer() {

  return (
    <footer className='w-[94%] mx-auto mt-10 bg-[#101139] rounded-2xl pt-5 px-4 text-white  items-center'>
      <div className='flex flex-col md:flex-row gap-8 '>
        <div className='md:w-[50%]'>
          <p className='pb-4 font-bold'>Japa<span className='text-[#d5439c]'>Fast</span></p>
          <p className='py-4 md:w-[80%] text-gray-200 text-sm'>
           We are the architects of your digital success.
           As a leading software company, we specialize in transforming your online 
           presence into a powerful asset. 
          </p>
        </div>
        
        <div className='md:w-[16.3%]'>
          <p className='py-1 font-bold'>User</p>
          <div className='flex flex-col gap-4 text-sm'>
            <Link to='#'>Terms and Conditions</Link>
            <Link to='#'>Privacy Policy</Link>
            <Link to='#'>Help &amp; Support</Link>
          </div>
        </div>
        <div className='md:w-[16.3%]'>
          <p className='py-1 font-bold'>Contacts</p>
          <div className='flex flex-col gap-4 text-sm'>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={Call} className='w-8' />
              <p className='text-sm'>Call</p>
            </Link>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={WhatsApp} className='w-8' />
              <p className='text-sm'>WhatsApp</p>
            </Link>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={Email} className='w-8' />
              <p className='text-sm'>Email</p>
            </Link>
          </div>
        </div>
        <div className='md:w-[16.3%]'>
          <p className='py-1 font-bold'>Socials</p>
          <div className='flex flex-col gap-4'>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={Facebook} className='w-8' />
              <p className='text-sm'>Facebook</p>
            </Link>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={Twitter} className='w-8'/>
              <p className='text-sm'>Twitter</p>
            </Link>
            <Link to='#' className='flex flex-row items-center gap-4'>
              <img src={Instagram} className='w-8'/>
              <p className='text-sm'>Instagram</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=' items-center flex flex-col w-[100%] '>
        <img className='w-20' src={Logo}/>
        
      </div>
    </footer>
  )
}

export default Footer