import React from 'react';
import Typewriter from 'typewriter-effect';

//assets imports
import backgroundVideoHomePg from '../images/header.mp4';
import weightIcon from '../images/dumbbell.png';

import OurMission from '../components/OurMission';

// TEST FOR QUERIES NOT WORKING
// import { useQuery } from '@apollo/client';
// import { QUERY_WORKOUTS } from '../utils/queries';


function Home(){

// TEST FOR QUERIES NOT WORKING
//   const { data } = useQuery(QUERY_WORKOUTS);

// const finalData = data ? data : {}
// // console.log("Final Data", finalData)
// const usertwo = finalData.workouts || [];

// console.log("tell me this is working", usertwo)
// console.log("?????", finalData)

const today = new Date();

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
</section>
{/* Our Mission Section */}
<section> 

  <OurMission/>

{/* Featured Workouts Section */}

<section className="homepageContentDivs featuredHomeContainer">

  <div className="pagesContainer featuredHome"> 
  <div className="featured-left-home"> 
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

  <div className="featured-right-home"> 
  <h2> workout of the day: </h2>
  <div className="mock-query-card"> 
  <p className="queryCardDate"> {today.toLocaleDateString()} </p>
  <h4 className="queryCardTitle" > Hot Girl Summer Shred </h4>
      <h5 className="queryCardUsername"> @megThee </h5>
      <hr></hr>
      <div className="exerciseDataContainer">
        <div className="exerciseCard"> 
            <h5> 2022 Summer Squat Challenge </h5>
                <ul className="exerciseMiniCard">
                    <li> <span> sets:</span>  1 daily </li>
                    <li> <span> reps:</span>  25 </li>
                    <li> <span> weigths:</span>  20 lbs (optional) </li>
                    <li className="queryDescription"> <span> Description: </span>This challenged is inspired by the one and only MegTheeStallion! Once once a day, taking mini breaks between each set. Happy Squating!</li>
                </ul>
        </div>
      </div>
  </div>
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