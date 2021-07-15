import React from 'react'
import '../styles/auth.css'
import { FaHome } from 'react-icons/fa';
import { Link } from 'gatsby';

function Signup() {
    return (
        <>
        
  <section>
    <div class="container">
      <div class="user Box">
        <div class="formBx">
          <form action="" onsubmit="return false;">
          <Link to="/"><FaHome class="gotohomesignup"/></Link>
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <input type="submit" name="" value="Sign Up" />
            <p class="signup">
              Already have an account ?
              <Link to="/login">Sign in.</Link>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /></div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Signup
