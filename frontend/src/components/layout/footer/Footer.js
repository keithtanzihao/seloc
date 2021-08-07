import React from 'react'

import './Footer.css'
/*
KIV this component for now. Not important
*/
function Footer() {
  return (
    <div className='footer'>
      <svg className='footer-pattern' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e45959" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,133.3C560,128,640,160,720,154.7C800,149,880,107,960,117.3C1040,128,1120,192,1200,208C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

      <div className='footer-container'>

        <div className='logo-content'>
          <h1>SELOC</h1>
          <div>
            <span>Coles Group Limited</span>
            <span>Hawthorn East, Victoria</span>
            <span>Australia 3123</span>
          </div>
          <span>2021 &#169; All Rights Reserved</span>
        </div>

        <div className='footer-content'>
          <span>Company</span>
          <span>About</span>
          <span>Store</span>
          <span>FAQ</span>
        </div>

        <div className='footer-content'>
          <span>Service</span>
          <span>Delivery</span>
          <span>Payment</span>
          <span>Contacts</span>
        </div>

        <div className='footer-content'>
          <span>Follow Us</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>

        <div className='newsletter-content'>
          <span>Get Our Newsletters</span>
          <input type="text" />
          <span>Terms &#38; Conditions </span>
          <span>Privacy Policy</span>
        </div>

      </div>


    </div>
  )
}

export default Footer