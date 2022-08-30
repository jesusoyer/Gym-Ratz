


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_WORKOUT } from '../utils/mutations';

// import Auth from '../utils/auth.js';


// const addWorkout = () => {
//     const [workout, setFormState] = useState( { workoutTitle: '', workoutAuthor: ''},

//     );
// 	const [exercise, setExerciseState] = useState(  {title:'', sets:'', reps:'', weight:'', other:''},
	
// 		);

	
//     const [addWorkout, { error, data }] = useMutation(ADD_WORKOUT);
// 	console.log(data)


// 	const handleChangeExercise = (event) => {
// 		const { name, value } = event.target;
	
// 		setExerciseState({
// 		  ...exercise,
// 		  [name]: value,
  
// 		});
// 	  };

//     const handleChange = (event) => {
//       const { name, value } = event.target;
  
//       setFormState({
//         ...workout,
//         [name]: value,

//       });
//     };
  
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       console.log(workout);
  
//       try {
//         const { data } = await addWorkout({
//           variables: { ...workout, ...exercise },
		  
//         }
// 		);
  
//         Auth.getProfile(data.addWorkout.token);
//       } catch (e) {
//         console.error(e);
// 		console.log(data)
// 		console.log({...workout,...exercise})
//       }
//     };
//     return (
//            <section className="mainFormContainer">
             
//               {data ? (
//                 <p>
//                   Success! You may now head{' '}
//                   <Link to="/">back to the homepage.</Link>
//                 </p>
//               ) : (
//                 <form className="signupForm" onSubmit={handleFormSubmit}>
//                 <h2> Sign Up </h2>
//                 <label> workout title:
//                   <input
//                     className="form-input"
//                     placeholder="workout title"
//                     name="workoutTitle"
//                     type="text"
//                     value={workout.workoutTitle}
//                     onChange={handleChange}
//                   />  </label>
//                   {/* <label>  
//                   <input
//                     className="form-input"
//                     placeholder="workout author"
//                     name="workoutAuthor"
//                     type="text"
//                     value={formState.workoutAuthor}
//                     onChange={handleChange}
//                   /> </label> */}
//                   <label> title 
//                   <input
//                     className="form-input"
//                     placeholder="title"
//                     name="title"
//                     type="text"
//                     value={exercise.title}
//                     onChange={handleChangeExercise}
//                   /> </label>

// 					<label> sets
//                   <input
//                     className="form-input"
//                     placeholder="sets"
//                     name="sets"
//                     type="text"
//                     value={exercise.sets}
//                     onChange={handleChangeExercise}
//                   /> </label>

// 					<label> reps
// 	                  <input
//                     className="form-input"
//                     placeholder="reps"
//                     name="reps"
//                     type="text"
//                     value={exercise.reps}
//                     onChange={handleChangeExercise}
//                   /> </label>

// 					<label> weight  <input
//                     className="form-input"
//                     placeholder="weight"
//                     name="weight"
//                     type="text"
//                     value={exercise.weight}
//                     onChange={handleChangeExercise}
//                   /> </label>

// 					<label> other  <input
//                     className="form-input"
//                     placeholder="other"
//                     name="other"
//                     type="text"
//                     value={exercise.other}
//                     onChange={handleChangeExercise}
//                   /> </label>


				  
//                   <button
//                     className="btn btn-block btn-primary"
//                     style={{ cursor: 'pointer' }}
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               )}
  
//               {error && (
//                 <div className="errorFormMess">
//                   {error.message}
//                 </div>
//               )}

//       </section>
//     );
//   };
  
//   export default addWorkout;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_WORKOUT } from '../utils/mutations';
// import { QUERY_WORKOUTS, QUERY_ME } from '../utils/queries';

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
    // update(cache, { data: { addWorkout } }) {
    //   try {
    //     const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
	// 	console.log(workouts)

    //     cache.writeQuery({
    //       query: QUERY_WORKOUTS,
    //       data: { workouts: [addWorkout, ...workouts] },
    //     });
    //   } catch (e) {
    //     console.error(e);
	// 	console.log("you errored out")
    //   }

    //   // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
    //   }); console.log("me is hit")
    // },
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
    <div>
      <h3>Today's grind session</h3>

      {Auth.loggedIn() ? (
        <>
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
                name="workoutTitle"
                placeholder="Here's a new thought..."
                value={workoutTitle}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input></label>
					<label> Why type of exercise will you be doing?
			      <input
                name="exerciseType"
                placeholder="exercise type"
                value={exerciseType}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleExerciseChange}
              ></input></label>
				<label> How many sets? If none type n/a.
			    <input
                name="sets"
                placeholder="sets"
                value={sets}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleSetsChange}
              ></input></label>
				<label> How many reps? If none type n/a.
				<input
                name="reps"
                placeholder="reps"
                value={reps}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleRepsChange}
              ></input></label>
				<label> How much weight? If none type n/a.
				<input	
                name="weight"
                placeholder="weight"
                value={weight}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleWeightChange}
              ></input></label>
				<label> Workout tips/tricks and information.
				<input	
                name="description"
                placeholder="description"
                value={description}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleDescriptionChange}
              ></input></label>

            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Workout
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default WorkoutForm;
