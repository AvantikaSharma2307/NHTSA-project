import React from 'react'
import "./Middleone.css";
import { NavLink } from 'react-router-dom';


export default function Middleone() {
    return (
        <>
        <div className='bg-yellow-400 w-full h-full'>
            <p className='pt-28 pl-44 font-sans text-3xl '>
                Recommended Driver<br></br> Assistance Technologies<br></br>
                Look for vehicles with these driver assistance technologies. <br></br>These features have met NHTSA performance tests.
                </p>
                <div className='grid grid-cols-4 gap-4 mt-24  pl-44'>
                    <div className=' border-r-2 border-slate-800  justify-center'>
                        <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
                            {/* Your content inside the circle */}
                            <span className="text-white"><img src="https://www.nhtsa.gov/sites/nhtsa.gov/files/styles/large/public/ratings-fwdcollision.png?itok=FimUxm8s" className='w-40 h-40 rounded-full' alt="Forward collision Warning" /></span>
                        </div>
                        <h1 className='font-sans text-xl'>Forward collision<br></br> Warning</h1>
                    </div>
                    <div className=' border-r-2 border-slate-800  justify-center'>
                        <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
                            {/* Your content inside the circle */}
                            <span className="text-white"><img src="https://www.nhtsa.gov/sites/nhtsa.gov/files/styles/large/public/ratings-lanedepart.png?itok=ebQbaij3" className='w-40 h-40 rounded-full' alt="Lane Departure Warning"></img></span>
                        </div>
                        <h1 className='font-sans text-xl'>Lane Departure <br></br>Warning</h1>
                    </div>
                    <div className=' border-r-2 border-gray-900   justify-center'>
                        <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
                            {/* Your content inside the circle */}
                            <span className="text-white"><img src="https://www.nhtsa.gov/sites/nhtsa.gov/files/styles/large/public/2023-12/thumb-rt-aeb.png?itok=b2fWW4Lr" className='w-40 h-40 rounded-full' alt="Crash Imminent Breaking"></img></span>
                        </div>
                        <h1 className='font-sans text-xl'>Crash Imminent <br></br> Breaking</h1>
                    </div>
                    <div>
                    <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center">
                        {/* Your content inside the circle */}

                        <span className="text-white"><img src="https://www.nhtsa.gov/sites/nhtsa.gov/files/styles/large/public/2023-12/thumb-rt-dbs.png?itok=7ixFfZV8" className='w-40 h-40 rounded-full' alt="Dynamic Brake Support"></img></span>
                    </div>
                    <h1 className=' font-sans text-xl text-gray'>Dynamic Brake <br></br>Support</h1>
                    </div>
                </div>
                <hr className='border-gray-900 m-4 ml-44 w-3/4'></hr>
                <h1 className='font-bold pl-44 w-1/2'>Other Safety Equipment</h1>
                <div  className=' grid grid-cols-2 gap-4'>
                    <p className='pl-44'>Other safety equipment provides protection and reliability on the road. When purchasing a vehicle, check for these features.
                 </p>
                 <ul className='font-bold mb-4'>
                     <li className='arrow-on-hover'>Air Bags</li>
                     <li className='arrow-on-hover'>Seat Belts</li>
                     <li className='arrow-on-hover'>Tire Pressure Monitoring System <br></br>(TPMS)</li>
                 </ul>
                </div>
                
        </div>
        <div className='mt-14 bg-red-500 pl-44 grid grid-cols-2 gap-2 p-14'>
             <p><b>Have a problem?</b><br></br>
             Report a problem with your vehicle, tires, car seats or other equipment.
             <br></br> We review every problem as we work to keep our roads safe.<br></br>
             <b>Informing Regarding any accident?</b></p>
             <NavLink to="/complaint">
             <button className="btn w-44 h-14"> Report Issue</button></NavLink>
            </div>
        </>
    )
}
