import React from 'react';
// import { Link } from 'react-router-dom';
import backgroundVideo from '../images/vertheader.mp4'
//need authentication import 

function LoginSignUp(){
return (
//react form goes here
<main className="pagesContainer"> 


<section className="mainFormContainer">

<form className="loginForm">
<h2> Login </h2>
    <label> Email: 
    <input className="form-input" placeholder="Email" name="email" type="email" value="" onChange=""/>
    </label>
    <label> Password: 
    <input className="form-input" placeholder="*******" name="email" type="email" value="" onChange=""/>
    </label>
    <button style={{ cursor: 'pointer' }} type="submit"> Login </button>
</form>

<video className="videoHeader" autoPlay muted loop> <source src={backgroundVideo} type="video/mp4"/> </video>

<form className="registerForm">
<h2> Register </h2>
    <label> Username: 
    <input className="form-input" placeholder="username" name="username" type="text"  value="" onChange=""/>
    </label>
    <label> Email: 
    <input className="form-input" placeholder="Email" name="email" type="email" value="" onChange=""/>
    </label>
    <label> Password: 
    <input className="form-input" placeholder="*******" name="email" type="email" value="" onChange=""/>
    </label>
    <button style={{ cursor: 'pointer' }} type="submit"> Login </button>
</form>

</section>
</main>
) //end of return  
}

//exports home page
export default LoginSignUp;