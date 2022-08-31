import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_WORKOUT } from '../utils/mutations';
import { QUERY_WORKOUTS, QUERY_ME} from '../utils/queries';

import Auth from '../utils/auth';

const WorkoutForm = () => {
  const [workoutTitle, setWorkoutTitle] = useState(" ");
  const [exerciseType, setExerciseState] = useState (" ");
  const [sets, setSetsState]= useState(" ");
  const [reps, setRepsState] = useState (" ");
  const [weight, setWeightState]= useState(" ")
  const [description, setDescriptionState]= useState (" ")
  

//   const [characterCount, setCharacterCount] = useState(0);

  const [addWorkout, { error}] = useMutation(ADD_WORKOUT, {
    update(cache, { data: { addWorkout } }) {
      try {
        const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
		console.log(workouts)

        cache.writeQuery({
          query: QUERY_WORKOUTS,
          data: { workouts: [addWorkout, ...workouts] },
        });
      } catch (e) {
        console.error(e);
		console.log("you errored out")
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
      }); console.log("me is hit")
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWorkout({
        variables: {
          workoutTitle,
		  exerciseType,
		  sets,
		  reps,
		  weight,
		  description,
          workoutAuthor: Auth.getProfile().data.username,
        },
      });

      setWorkoutTitle(" ");
	  setExerciseState(" ")
	  setSetsState(" ")
	  setRepsState(" ")
	  setWeightState(" ")
	  setDescriptionState(" ")
 

    } catch (err) {
      console.error(err);
	 
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'workoutTitle' && value.length <= 280) {
      setWorkoutTitle(value);
    //   setCharacterCount(value.length);
    }
  };
  const handleExerciseChange = (event) => {
    const { name, value } = event.target;

    if (name === 'exerciseType' && value.length <= 280) {
      setExerciseState(value);
    //   setCharacterCount(value.length);
    }
  };

  const handleSetsChange = (event) => {
    const { name, value } = event.target;

    if (name === 'sets' && value.length <= 280) {
      setSetsState(value);
    //   setCharacterCount(value.length);
    }
  };


  const handleRepsChange = (event) => {
    const { name, value } = event.target;

    if (name === 'reps' && value.length <= 280) {
      setRepsState(value);
    //   setCharacterCount(value.length);
    }
  };

  const handleWeightChange = (event) => {
    const { name, value } = event.target;

    if (name === 'weight' && value.length <= 280) {
      setWeightState(value);
    //   setCharacterCount(value.length);
    }
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;

    if (name === 'description' && value.length <= 280) {
      setDescriptionState(value);
    //   setCharacterCount(value.length);
    }
  };



  return (
    
    <div className="pagesContainer">

      {Auth.loggedIn() ? (
        <>
          <form
            className="addWorkoutForm"
            onSubmit={handleFormSubmit} >

          <h2> Add A Workout </h2>
          
            <div className="workoutFormContainer">
				<label className="workoutLabel"> What is your workouts name?
              <input
                name="workoutTitle"
                placeholder="Here's a new thought..."
                value={workoutTitle}
                className="form-input"
                onChange={handleChange}
              /></label>
					<label className="workoutLabel"> Why type of exercise will you be doing?
			      <input
                name="exerciseType"
                placeholder="exercise type"
                value={exerciseType}
                className="form-input"
                onChange={handleExerciseChange}
              /></label>
				<label className="workoutLabel"> How many sets? If none type n/a.
			    <input
                name="sets"
                placeholder="sets"
                value={sets}
                className="form-input"
                onChange={handleSetsChange}
              /></label>
				<label className="workoutLabel"> How many reps? If none type n/a.
				<input
                name="reps"
                placeholder="reps"
                value={reps}
                className="form-input"
                onChange={handleRepsChange}
              /></label>
				<label className="workoutLabel"> How much weight? If none type n/a.
				<input	
                name="weight"
                placeholder="weight"
                value={weight}
                className="form-input"
                onChange={handleWeightChange}
              /></label>
				<label className="workoutLabel"> Workout tips/tricks and information.
				<input	
                name="description"
                placeholder="description"
                value={description}
                className="form-input"
                onChange={handleDescriptionChange}
              /></label>

            </div>
              <button style={{ cursor: 'pointer' }} type="submit">
                Add Workout
              </button>

          </form>
          {error && (
              <div className="errorFormMess">
                {error.message}
              </div>
            )}
        </>
      ) : (
        <>
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login | signup </Link> 
        </p>
        </>
      )}
    </div>
  );
};

export default WorkoutForm;
