import React from 'react'
import '../components/styles/Footer.css'
import {FaFacebook,FaTwitter,FaInstagram,FaLocationArrow,FaLinkedin,FaDiscord,FaPhoneAlt,FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
        
        <div class="subscribe">
            <h2>Subscribe to our Newsletter</h2>
            <span>Join us our team by subscribe to Freelancer Nepal</span>
            <div class="input-group mb-3">
  <input type="text" placeholder="Enter Your Email"/>
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
  <p><a href="#">Web Design</a></p>
  <p><a href="#">Graphic Design</a></p>
  <p><a href="#">Web Developers</a></p>
  <p><a href="#">Python</a></p>
  <p><a href="#">React</a></p>
  </div>
  <div>
  <h3>Company</h3>
  <hr/>
  <p><a href="#">About Us</a></p>
  <p><a href="#">How it works</a></p>
  <p><a href="#">Blog</a></p>
  <p><a href="#">Carrer</a></p>
  <p><a href="#">Resources</a></p>
  <p><a href="#">FAQs</a></p>
  </div>
  <div>
  <h3>Category</h3>
  <hr/>
  <p><a href="#">Design & Arts</a></p>
  <p><a href="#">Engineering</a></p>
  <p><a href="#">Sales & Marketing</a></p>
  <p><a href="#">Finance</a></p>
  <p><a href="#">Programming</a></p>
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
