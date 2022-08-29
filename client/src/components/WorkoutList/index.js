import React from 'react';

const WorkoutList = () => {



return (
    <div className="queriesCardHomepage"> 
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
                <div> other: Take a rest ever 30 sec  </div>
        </div>
        <div className="exerciseCard">
            <h5> Deadlifts </h5>
                <ul className="exerciseMiniCard">
                    <li> sets: 3 </li>
                    <li> reps: 8 </li>
                    <li> weigths: 20 lbs </li>
                </ul>
                <div> other: Take a rest ever 30 sec  </div>
        </div>
        <div className="exerciseCard">
            <h5> Sumo Squats </h5>
                <ul className="exerciseMiniCard">
                    <li> sets: 3 </li>
                    <li> reps: 8 </li>
                    <li> weigths: 20 lbs</li>
                </ul>
                <div> other: Take a rest ever 30 sec  </div>
        </div>
      </div>
      </div>
  
    </div>
)
}

export default WorkoutList;