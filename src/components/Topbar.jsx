import React from 'react'


function Topbar({pageName}) {
  return (
    <div className=''>
        <div className='flex flex-row justify-between'>
            <div>
                <p>{pageName}</p>
                <p className='text-sm text-gray-500'>14 Aug 2023</p>
            </div>
            
        </div>

    </div>
  )
}

export default Topbar