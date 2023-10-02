import React,{useState} from 'react'
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'

function FlightBookingForm() {
    const [seats, setSeats] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addSeats=()=>{
        setSeats(seats + 1)
       
    }

    const minusSeats=()=>{
        setSeats(seats - 1)
        
    }
  return (
    <div>
        <form className='flex flex-row gap-8'>
            <div className='flex flex-col gap-4'>
                <p>Number Of Seats</p>
                <div className='flex flex-row gap-4'>
                    
                    <p className='px-3 py-1 border border-gray-400 rounded-xl'>{seats}</p>

                    <div className='flex flex-col gap-2'>
                        <AiOutlinePlus onClick={addSeats}/>
                        <AiOutlineMinus onClick={minusSeats}/>
                        
                    </div>
                </div>
                

            </div>
            <div>
                <p>Select Class</p>
                <div>
                    <div>
                        <p>First Class</p>
                    </div>
                    <div>
                        <p>Business Class</p>
                    </div>

                </div> 

            </div>
            <div>
                <p className=''>Total Price</p>
                <p className='font-semibold py-2'>{totalPrice}</p>

            </div>

        </form>
    </div>
  )
}

export default FlightBookingForm