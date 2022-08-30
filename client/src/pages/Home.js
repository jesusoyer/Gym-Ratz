import React from 'react';
import Typewriter from 'typewriter-effect';

//mobile css - don't delete
import '../styles/Mobile.css';

//assets imports
import backgroundVideoHomePg from '../images/header.mp4';
import weightIcon from '../images/dumbbell.png';
// import masterSplinterIcon from '../images/splinter.png'

//For 1 Featured Workout (mockup)
// import WorkoutList from '../components/WorkoutList';

function Home(){
return (
//home page content goes here
<main> 

{/* main video section */}
<section> 
<video className="homepageVideo" autoPlay muted loop> <source src={backgroundVideoHomePg} type="video/mp4"/> </video>
<div className="headerContainer">
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
<p className="contentItems">  Gym-Ratz is an online platform where users of all fitness levels can share their workouts with others. With our public domain, you are guaranteed to find the workout perfect for you and your fitness goals. </p>
<a className="contentItems btnWhite" href="/login"> start building </a> <a className="learnMoreHeader" href="#mission"> see our model </a>

</div>
</div>

</div>

{/* Our Mission Section */}
</section>
<section> 
<div className="homepageContentDivs pagesContainer" id="mission"> 
<h2> Our Mission </h2>
<p> Have you ever wanted to work out but didn’t know what exercises to do? Squats, deadlifts, push-ups… it can all be quite confusing if you’re new to the game. Starting your fitness journey can be overwhelming and intimidating- but it doesn’t need to be. Find the workouts that are right for you, at your own pace.
</p> 
<p className="ctaHomepage">Sign up for an account today to be part of our Gym Ratz family! <a className="btn" href="/login"> start building </a> </p> 
</div>

{/* Featured Workouts Section */}

<section className="homepageContentDivs featuredContainer">

  <div className="pagesContainer featuredWorkoutCard"> 
  <div className="featured-left"> 
  {/* <img src={masterSplinterIcon} alt="weight-icon" width="70px"/> */}
  <img src={weightIcon} alt="weight-icon" width="70px"/>
    <div className="featuredH2"> 
      <h2> Anytime. </h2>
      <h2> Anywhere. </h2>
      <h2> Any Level. </h2>
    </div> 
    
    <Typewriter 
    options={{
      strings: ["brah...", "don't skip leg day", "just sign up..." ],
      autoStart: true,
      loop: true,
    }}/>
  <img src={weightIcon} alt="weight-icon" width="70px" className="secondDumbellImg"/>
  </div>

  <div className="featured-right"> 
  <h2> workout of the day: </h2>
  {/* fake card for mockup */}
  <div className="queryCards">
      <h4 className="queryCardTitle" > Hot Girl Summer Shred </h4>
      <h5 className="queryCardUsername"> @megThee </h5>
      <hr></hr>
      <div className="exerciseDataContainer">
        <div className="exerciseCard"> 
            <h5> Squats </h5>
                <ul className="exerciseMiniCard">
                    <li> sets: 3 </li>
                    <li> reps: 8 </li>
                    <li> weigths: 20 lbs  </li>
                </ul>
                {/* <div> other: Take a rest ever 30 sec  </div> */}
        </div>
        <div className="exerciseCard">
            <h5> Deadlifts </h5>
                <ul className="exerciseMiniCard">
                    <li> sets: 3 </li>
                    <li> reps: 8 </li>
                    <li> weigths: 20 lbs </li>
                </ul>
                <div> other: Don't forget to keep a leveled back.  </div>
        </div>
        <div className="exerciseCard">
            <h5> Sumo Squats </h5>
                <ul className="exerciseMiniCard">
                    <li> sets: 3 </li>
                    <li> reps: 8 </li>
                    <li> weigths: 15 lbs</li>
                </ul>
                <div> other: Take a rest ever 30 sec. Repeat 3 times  </div>
        </div>
      </div>
      </div>
    {/* fake card for mockup */}
  </div>
  </div>
</section>

{/* Our Story Section */}
<div className="pagesContainer homepageContentDivs imgContent50Homepage "> 
{/* div image leave empty */}
<div className="gymImgHomepage"> </div>
<div className="ourStoryP"> 
<h2> Our Story </h2>
<p>Gym Rats was created and coded by five individuals (Jesus, Bexi, Mason, Eric, and Laiko) pursuing a certificate in the UT Austin’s Coding Bootcamp. All of us have one thing in common: we’re all small baby programmers that want be jacked junior software developers. With this vision in mind, we created Gym Rats to be an application that makes fitness easily accessible to the coding community and those alike.</p>
  <p> This application utilizes the following languages: <span className="codeSpan"> React, GraphQL, Node.js, Express.js, MongoDB, Mongoose ODM. </span>  </p>
  </div>
</div>

{/* Future Development Section */}
<div className="pagesContainer homepageContentDivs"> 
<h2> Future Development </h2>
<p>Gym Ratz is always looking to improve and expand. Some of the future developments we plan on implementing to our application include features to save a workout to your personal profile, and the ability for trainers to create a professional business profile to market their services. Other features we would look into adding include being able to add friends and the ability to comment on other users’ posts. </p>
</div>
</section>

</main>

) //end of return  
}

//exports home page
export default Home;