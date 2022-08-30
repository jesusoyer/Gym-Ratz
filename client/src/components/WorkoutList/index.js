import React from 'react';

import Typewriter from 'typewriter-effect';

const WorkoutList  = () => {



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
