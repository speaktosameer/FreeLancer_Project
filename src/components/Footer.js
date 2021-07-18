import React from 'react'
import '../components/styles/Footer.css'
import {FaFacebook,FaTwitter,FaInstagram,FaLocationArrow,FaLinkedin,FaDiscord,FaPhoneAlt,FaTelegramPlane} from 'react-icons/fa'
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer>
        
        <div class="subscribe">
            <h2>Subscribe to our Newsletter</h2>
            <span>Join us our team by subscribe to Freelancer Nepal</span>
            <div class="input-group mb-3">
  <input type="text" class="stext" placeholder="Enter Your Email"/>
  <div>
    <button type="button" class="sbtn">Subscribe</button>
  </div>
</div>


            </div>

            <div class="flex-container">
            
  <div class="first">
  <h3>Freelance Nepal</h3>
  <hr/>
  <p>You can search FreelanceNepal to get <br/> an  idea of what freelancers in similar are.</p>
        
            
            <FaFacebook class="social-icon"/>

            <FaTwitter class="social-icon"/>
                
            <FaInstagram class="social-icon"/>
            <FaLinkedin class="social-icon"/>
            <FaDiscord class="social-icon"/>
            
        
  </div>
  <div>
  <h3>Trending</h3>
  <hr/>
  <p><Link to="#">Web Design</Link></p>
  <p><Link to="#">Graphic Design</Link></p>
  <p><Link to="#">Web Developers</Link></p>
  <p><Link to="#">Python</Link></p>
  <p><Link to="#">React</Link></p>
  </div>
  <div>
  <h3>Company</h3>
  <hr/>
  <p><Link to="#">About Us</Link></p>
  <p><Link to="#">How it works</Link></p>
  <p><Link to="#">Blog</Link></p>
  <p><Link to="#">Carrer</Link></p>
  <p><Link to="#">Resources</Link></p>
  <p><Link to="#">FAQs</Link></p>
  </div>
  <div>
  <h3>Category</h3>
  <hr/>
  <p><Link to="#">Design & Arts</Link></p>
  <p><Link to="#">Engineering</Link></p>
  <p><Link to="#">Sales & Marketing</Link></p>
  <p><Link to="#">Finance</Link></p>
  <p><Link to="#">Programming</Link></p>
  </div>
  <div>
  <h3>Have a question</h3>
  <hr/>
  <p><FaLocationArrow class="social-icon"/> Boudha Ktm Nepal</p>
  <p><FaPhoneAlt class="social-icon"/>+977-987654321</p>
  <p><FaTelegramPlane class="social-icon"/>info@freelancenp.com</p>
  </div>
</div>
<div class="copyright">
    <h4>Copyright ©2021 All rights reserved</h4>
</div>
        </footer>
    )
}

export default Footer
