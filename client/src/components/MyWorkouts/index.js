
import React from 'react';
import Typewriter from 'typewriter-effect';
import { useOutletContext } from 'react-router-dom';

import '../MyWorkouts/myworkouts.css'

const MyWorkouts = () => {

const rawData = useOutletContext();

// console.log("workout data from profile", rawData)
// console.log("workout - arr " , rawData.workouts[0])
// console.log("workout username", workouts.username)

const workoutArr=[];

for(let i=0; i<rawData.workouts.length; i++) { 
    // console.log("iteration of a workout", workouts.workouts[i])

    const workout = {
        id: rawData.workouts[i]._id,
        title: rawData.workouts[i].workoutTitle,
        type: rawData.workouts[i].exerciseType,
        sets: rawData.workouts[i].sets,
        reps: rawData.workouts[i].reps,
        weight: rawData.workouts[i].weight,
        description: rawData.workouts[i].description
    }   
    // console.log(workout)
    workoutArr.push(workout);
};


console.log("is this an array?", workoutArr)
// console.log("interesting....", workoutArr[0].description)

const today = new Date();
// console.log(today.toString());


return (
    <main> 

    <div className="liveFeed" > 
    <h2 > My Workouts </h2> <Typewriter 
    options={{
      strings: [".......",],
      autoStart: true,
      loop: true,
    }}/>
    </div>
    <div className="workoutDataContainer"> 

    {workoutArr.map(function(workout){
        return  (
            
    <div  className="workoutCard" key={workout.id}>
            <p className="queryCardDate"> {today.toLocaleDateString()} </p>
            <h4 className="queryCardTitle" > {workout.title} </h4>
            <h5 className="queryCardUsername"> @{rawData.username}</h5>
            <hr></hr>
            <div className="exerciseDataContainer">
                <div className="exerciseCard">
                    <h5> Exercise: {workout.type} </h5>
                        <ul className="exerciseMiniCard">
                            <li> <span> sets:</span> {workout.sets}  </li>
                            <li> <span> reps: </span>  {workout.reps} </li>
                            <li> <span> weight:</span>  {workout.weight} lbs  </li>
                            <li className="queryDescription">Description: {workout.description}  </li>
                        </ul>
                </div>
            </div>
      </div>

        )
    })}

    </div>
    
    </main>
)

}

export default MyWorkouts;