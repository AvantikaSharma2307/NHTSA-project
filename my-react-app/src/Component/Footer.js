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
          <img src="https://www.nhtsa.gov/themes/custom/nhtsa/images/NHTSA-logo-small-viewport.svg" alt="NHTSA"></img>
          <p className='text-white mt-14'>National Highway Traffic Safety Administration

         1200 New Jersey Avenue, SE
           Washington, D.C. 20590

          888-327-4236,
          877-561-7439 (TTY)</p>


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
