import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage]= useState('');
    const navigate = useNavigate();
    

    const handleSubmit= async(e)=>{

        e.preventDefault();
        if(email==='dev@gmail.com' && password==='Dev@1344'){
            
            navigate('/dashboard')
        }else{
            setMessage('Invalid Credentails')
        }

    }   

  return (
    <div>
        <Navbar/>
        <div className='mt-2 items-center '>
            <div className='flex items-center justify-center h-[70vh] flex-col items-center md:w-[50%]  mx-auto'>
                <p className=''>Log In</p>
                <div>
                    <form  className='flex flex-col '>
                        <div>
                            <p className='text-semibold'>{message}</p>
                        </div>

                        <input name='email'
                         required placeholder='Email' className='my-2 p-3 p rounded-xl bg-gray-500 border-0'
                         value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />

                        <input name='password' 
                        required placeholder='Password' className='my-2 p-3 rounded-xl bg-gray-500 border-0'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                        <button onClick={handleSubmit} className='mt-1 mx-auto p-3 bg-blue-500 rounded-2xl'>
                            Log in
                        </button>
                        
                        
                    </form>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Login