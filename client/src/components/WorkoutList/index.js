import React from 'react';
import Typewriter from 'typewriter-effect';
import { useQuery } from '@apollo/client';

// import { useOutletContext } from 'react-router-dom';
import { QUERY_WORKOUTS } from '../../utils/queries';

const WorkoutList  = () => {

const { data } = useQuery(QUERY_WORKOUTS);

const finalData = data ? data : {}
// console.log("Final Data", finalData)
const usertwo = finalData.workouts || [];

console.log("tell me this is working", usertwo)
console.log("?????", finalData)

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
    </div>
)
}

export default WorkoutList;
