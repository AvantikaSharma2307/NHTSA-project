import React from 'react'
// import Scroll from './Scroll';
import './Middleone.css';
import { NavLink } from 'react-router-dom';


export default function Precautions() {
  return (
    <>
    <div className='grid grid-cols-3 gap-3'>
        <div><img src="https://img.freepik.com/premium-vector/five-stars-customer-product-rating-review_172533-7.jpg?w=1380" alt="star"></img></div>
        <div>
            <h1 className='text-4xl pt-24 mb-14'>More stars mean safer cars.</h1>
            <hr></hr><p>The 5-Star Safety Ratings program evaluates how vehicles perform in crash tests. NHTSA conducts frontal, side and rollover tests because these types account for the majority of crashes on America's roadways.</p>
             <hr></hr>
             Ensuring safety while taking or driving a vehicle is crucial to prevent accidents and protect yourself and others on the road. Here are some important precautions to consider:
             

        </div>
        <img src='https://img.freepik.com/free-vector/car-accessories-concept-illustration_114360-7487.jpg?size=626&ext=jpg&ga=GA1.1.1331251252.1706267450&semt=ais' alt="car"></img>
    </div>
    <div className='text-center flex flex-col items-center text-cyan-600 text-2xl hover:text-cyan-950 mt-44'><NavLink to="/roadsafety">Learn more about Road Safety</NavLink>
    <img src="https://th.bing.com/th/id/OIP.QtLylGnfJOW2flsSpeTOJAAAAA?rs=1&pid=ImgDetMain"alt="arrow" className='w-12 h-4 animate-bounce'></img>
    </div>
    </>
  )
}


