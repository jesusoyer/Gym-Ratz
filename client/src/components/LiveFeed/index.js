import React from 'react';
import Typewriter from 'typewriter-effect';
import { useQuery } from '@apollo/client';

// import { useOutletContext } from 'react-router-dom';
import { QUERY_WORKOUTS } from '../../utils/queries';

const WorkoutList  = () => {

const today = new Date();

// const { data } = useQuery(QUERY_WORKOUTS);

// const finalData = data ? data : {}
// console.log("Final Data", finalData)
// const usertwo = finalData.workouts || [];

// console.log("tell me this is working", usertwo)
// console.log("?????", finalData)

// const rawData = useOutletContext();

// const userArr =[];

// console.log("UserArr", rawData)

// for(let i=0; i<rawData; i++) { 
//   // console.log("iteration of a workout", workouts.workouts[i])

//   const workout = {
//       id: rawData.workouts[i]._id,
//       title: rawData.workouts[i].workoutTitle,
//       type: rawData.workouts[i].exerciseType,
//       sets: rawData.workouts[i].sets,
//       reps: rawData.workouts[i].reps,
//       weight: rawData.workouts[i].weight,
//       description: rawData.workouts[i].description
//   }   
//   // console.log(workout)
//   userArr.push(workout);
// };


// console.log("UserArr", userArr)
// // console.log("interesting....", workoutArr[0].description)

return (
    <div> 

<div className="liveFeed" > 
    <h2 > Live Feed</h2> <Typewriter 
    options={{
      strings: [".......",],
      autoStart: true,
      loop: true,
    }}/>
    </div>

    <section className="mockQuery">

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
  
    </section>

    </div>
)
}

export default WorkoutList;
