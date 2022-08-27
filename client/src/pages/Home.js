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
<h2> Usage </h2>
<p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
</div>
<div className="inPageDiv"> 
<h2> Placeholder </h2>
<p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
</div>
<div className="inPageDiv"> 
<h2> Placeholder </h2>
<p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
</div>
</section>

</main>

) //end of return  
}

//exports home page
export default Home;