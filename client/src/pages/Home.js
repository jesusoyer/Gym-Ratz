import React from 'react';
import Typewriter from 'typewriter-effect';
// import backgroundVideo from '../images/vertheader.mp4'
import backgroundVideo2 from '../images/header.mp4'
//Question: Do we want home page to have a few workout posts?
// import WorkoutList from '../components/WorkoutList';

function Home(){
return (
//home page content goes here
<main> 
{/* <video className="videoHeader" autoPlay muted loop> <source src={backgroundVideo} type="video/mp4"/> </video> */}
<video className="videoHeader2" autoPlay muted loop> <source src={backgroundVideo2} type="video/mp4"/> </video>
<section className="headerContainer"> 
<div className="header"> 

<div className="subHeaderBox typewriterContainer">
    <h1 className="contentItems"> Build + Share Workouts 
    <Typewriter 
  options={{
    strings: ['Weight Training', 'Cardio', 'HIIT','CrossFIT'],
    autoStart: true,
    loop: true,
  }}/> </h1> </div> 


<div className="subHeaderBox contentHeader"> 
<p className="contentItems">  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
<button className="contentItems btnWhite"> sign up now </button> <a className="learnMoreHeader" href="#usage"> see our model </a>

</div>
</div>


</section>
<section className="pagesContainer" id="usage"> 
<div className="inPageDiv"> 
<h2> Our Mission </h2>
<p> Have you ever wanted to work out but didn’t know what exercises to do? Squats, deadlifts, push-ups… it can all be quite confusing if you’re new to the game. Starting your fitness journey can be overwhelming and intimidating- but it doesn’t need to be.
<div>Gym-Ratz is an online platform where users of all fitness levels can share their workouts with others. With our public domain, you are guaranteed to find the workout perfect for you and your fitness goals.</div>
<div>Sign up for an account today to be part of our Gym Ratz family!</div>
</p>

</div>
<div className="inPageDiv"> 
<h2> Our Story </h2>
<p>Gym Rats was created and coded by five individuals (Jesus, Bexi, Mason, Eric, and Laiko) pursuing a certificate in the UT Austin’s Coding Bootcamp. All of us have one thing in common: we’re all small baby programmers that want be jacked junior software developers. With this vision in mind, we created Gym Rats to be an application that makes fitness easily accessible to the coding community and those alike.
  <div>This application utilizes the following languages: React, GraphQL, Node.js, Express.js, MongoDB, Mongoose ODM, </div>
</p>
</div>

<div className="inPageDiv"> 
<h2> Our Future </h2>
<p>Gym Ratz is always looking to improve and expand. Some of the future developments we plan on implementing to our application include features to save a workout to your personal profile, and the ability for trainers to create a professional business profile to market their services. Other features we would look into adding include being able to add friends and the ability to comment on other users’ posts. </p>
</div>
</section>

</main>

) //end of return  
}

//exports home page
export default Home;