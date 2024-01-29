import React from 'react'

export default function Middle() {
  return (
    <>
    <div className='bg-gray-900 relative'>
        <div className='grid grid-cols-4'>
            <img src="https://i.pinimg.com/564x/0e/ab/c2/0eabc2f1ed9d49600f0c5d50ec0f6ddb.jpg" alt="cartyre" className=' opacity-50 border-r-4 border-white'></img>
            <div className='grid grid-rows-2 '>
                <img src="https://i.pinimg.com/236x/49/f9/10/49f9106728c258feeadaad7f1d22d747.jpg" alt="accident" className='opacity-50 h-full border-b-4 border-white'></img>
                <img src="https://i.pinimg.com/236x/06/4b/15/064b15d8f1b99d0cb60124f88d447eed.jpg" alt="accident" className='opacity-50 h-80 w-full'></img>
            </div>
            <p className='col-span-2 text-center flex flex-col items-center mt-44 text-white'>
                <h1 className='font-normal text-4xl text-white'>SAFE CARS</h1><h1 className='font-bold text-7xl text-white'>save lives</h1>
                Check your vehicle safety.<br></br>
               Also find safety information on car seats and tires.
            </p>
        </div>


    </div>
            <div className='border-4 border-amber-500 h-72 w-72 ml-80 text-center pt-36 pl-14 font-bold text-6xl flex flex-col items-center absolute top-full z-10 bg-transparent'>Latest News</div>
       <div className='grid grid-cols-2 gap-2'>
        <div className=' ml-96 mt-44'>
             <img src="https://www.nhtsa.gov/themes/custom/nhtsa//images/icon-trending.png"className='pl-40' alt="trending"></img>
             <p className='font-bold text-3xl'>Trending News</p>
             <h1 className='text-blue-500 font-bold text-lg hover:text-blue-300 ml-16'>Drunk Driving</h1>
             <h1 className='text-blue-500 font-bold text-lg hover:text-blue-300 ml-16 ' >Speeding</h1>
             <h1 className='text-blue-500 font-bold text-lg hover:text-blue-300 ml-16 mb-12' >Seat Belts</h1>
             <h1>Driver Assistance Technologies</h1>
              <img src="https://www.nhtsa.gov/sites/nhtsa.gov/files/adas-main-image-04-553x713.jpg" alt="driver" className='w-56'></img>
            </div>
            <div className='mt-28'>
            <img src="https://i.pinimg.com/564x/c5/07/f9/c507f9b7a3e9cb07bc394ff9075d5ec6.jpg" alt="child" className='h-3/4'></img>
            <h1 className='font-bold text-4xl hover:text-blue-500'>Car Seats and Booster Seats </h1>
            <p>Steps to choose the right seat, install it correctly and keep your child safe.</p>
            </div>
        </div>
    </>
  )
}
