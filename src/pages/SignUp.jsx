import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SignUp() {

    const handleSubmit= async(e)=>{
        window.location.href('/login')

    } 
  return (
    <div>
        <Navbar/>
        <div className='mt-2 items-center '>
            <div className='flex items-center justify-center h-[70vh] flex-col items-center md:w-[50%]  m-auto'>
                <p className=''>Sign Up</p>
                <div>
                    <form onSubmit={handleSubmit} method='POST' className='flex flex-col'>
                        <input name='email' required placeholder='Email' className='my-2 p-3 p rounded-xl bg-gray-500 border-0'/>
                        <input name='password' required placeholder='Password' className='my-2 p-3 rounded-xl bg-gray-500 border-0'/>
                        <input type='submit' value='Sign Up' className='mt-1 mx-auto p-3 bg-blue-500 rounded-2xl'/>
                    </form>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default SignUp