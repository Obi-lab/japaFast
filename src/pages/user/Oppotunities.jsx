import React from 'react'

function Oppotunities({flightCode,airport,departureDate,depatureTime,from,destination}) {
  return (
    <div>
        <div className='border border-gray-600'>
            <p className='py-1 px-2'>Flight {flightCode}</p>
            <p className='py-1 px-2'>{airport} Aiport</p>
            <p className='py-1 px-2'>From {from} To {destination} </p>
            <p className='py-1 px-2'>Depature {departureDate}, {depatureTime} </p>
            <button>
                Details
            </button>
        </div>
    </div>
  )
}

export default Oppotunities