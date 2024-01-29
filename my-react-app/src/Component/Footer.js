import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className=''>
    {/* <div className='text-center flex flex-col items-center text-cyan-600 text-2xl hover:text-cyan-950'><NavLink to="/roadsafety">Learn more about Road Safety</NavLink>
    <img src="https://th.bing.com/th/id/OIP.QtLylGnfJOW2flsSpeTOJAAAAA?rs=1&pid=ImgDetMain"alt="arrow" className='w-12 h-4 animate-bounce'></img>
    </div> */}
        <footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          
          <p className='text-white mt-4 text-5xl font-bold'>Steppers</p><br/>
          <p className='text-white'>"Empathy in Every Turn: Navigating the Road to Recovery.
             Your Compassionate Guide for Support, Resources, and Resilience After a Road Accident.
              Together, We Strive for Healing and Justice on the Journey to Restoration."</p>


        </div>
        <div className="footer-col"></div>
        <div className="footer-col"></div>

        <div className="footer-col">

          <div className="social-links mt-44">
            <a href="https://www.facebook.com/NHTSA"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/nhtsagov"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/nhtsagov/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/user/usdotnhtsa"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>

    </div>
    </>
  )
}
