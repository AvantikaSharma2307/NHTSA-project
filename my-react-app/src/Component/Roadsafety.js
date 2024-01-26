import React from 'react'
import './Roadsafety.css';
// import Footer from './Footer';
import { NavLink } from 'react-router-dom';

export default function Roadsafety() {
  return (
    <>
    <div>
      <h1 className='font-bold text-center flex flex-col items-center text-4xl mt-14'>Road Safety<br></br></h1>
      <p className='text-2xl text-center flex flex-col'> NHTSA promotes safe behaviors on our nation’s roads.</p>
      <div className='grid grid-cols-4 gap-4 ml-44 mt-12 mb-44'>
        <div className="card">
          <div className="card-details">
            <p className="text-title">Child Safety</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div><NavLink to="/child-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
      
      {/* 2nd */}
      <div className="card">
          <div className="card-details">
            <p className="text-title">Teen Driving</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div><NavLink to="/teen-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
        {/* 3rd */}
        <div className="card">
          <div className="card-details">
            <p className="text-title">Older Drivers</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div><NavLink to="/oldage-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
        {/* 4th */}
        <div className="card">
          <div className="card-details">
            <p className="text-title">Pedestrain Safety</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div><NavLink to="/pedestrain-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
        {/* 5th */}
        <div className="card">
          <div className="card-details">
            <p className="text-title">Bicycle and Motorcycle safety</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div><NavLink to="/vehicle-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
        {/* 6 */}
        <div className="card">
          <div className="card-details">
            <p className="text-title">School Bus Safety</p>
            {/* <p className="text-body">Here are the details of the card</p> */}
          </div>
          <NavLink to="/schoolbus-safety">
          <button className="card-button">Read more</button></NavLink>
        </div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
    
  )
}
