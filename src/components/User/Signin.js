import React from 'react'
import '../styles/auth.css'
import { FaHome } from 'react-icons/fa';

function Signin(){
    return (
        <>
             <section>
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://images.unsplash.com/photo-1599110364793-19e5bb7828e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" /></div>
        <div class="formBx">
        
          <form action="" onsubmit="return false;">
          <FaHome class="gotohomelogin"/>  
            <h2>Sign In</h2>
            
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a href="#">Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Signin

