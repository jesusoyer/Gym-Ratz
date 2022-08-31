import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_WORKOUT } from '../utils/mutations';
// import { QUERY_WORKOUTS, QUERY_ME } from '../utils/queries';



const DeleteBox= () => {
  const [workoutId, setWorkoutId] = useState(" ");
  
  

//   const [characterCount, setCharacterCount] = useState(0);

  const [removeWorkout, { error}] = useMutation(REMOVE_WORKOUT, { });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await removeWorkout({
        variables: {
          workoutId,
		 
        },
      });

      setWorkoutId(" ");
	  
    } catch (err) {
      console.error(err);
	 
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'workoutId' && value.length <= 280) {
      setWorkoutId(value);
    //   setCharacterCount(value.length);
    }
  };






  return (
    <div>
      <h3>Delete</h3>

      
        
          {/* <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p> */}
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
				<label> What is your workouts name?
              <input
                name="workoutId"
                placeholder="Here's a new thought..."
                value={workoutId}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input></label>			

            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                delete workout
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
       
      
    </div>
  );
};

export default DeleteBox;
