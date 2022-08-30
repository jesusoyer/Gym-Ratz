import React, { useState } from 'react';
import '../styles/Workout.css';
import { ADD_WORKOUT } from '../utils/mutations';
import { QUERY_WORKOUTS, QUERY_ME} from '../utils/queries';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// const tempAuthor = "test#3"

// const exerciseFormValues = [{ title: '', sets: '', reps: '', weight: '', other: '' }]
// const workoutFormValues = [{workoutTitle: '', workoutAuthor: tempAuthor}]

const Form = () => {
	// array of forms containing set, reps, and weights

	const [newForm, setNewForm] = useState( [{workoutTitle: '', workoutAuthor: '',title: '', sets: '', reps: '', weight: '', other: ''}] );






	const [addWorkout,  {error}] = useMutation(ADD_WORKOUT, {
		update(cache, { data: { addWorkout } }) {
		  try {
			const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
	
			cache.writeQuery({
			  query: QUERY_WORKOUTS,
			  data: { workouts: [addWorkout, ...workouts] },
			});
		  } catch (e) {
			console.log('you are in the add workouts top area')
			// console.error(e);
		  }
		 const { me } = cache.readQuery({ query: QUERY_ME });
		  cache.writeQuery({
			query: QUERY_ME,
		data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
		  });
		},
	  });

// log data to console or hgowever we are returning the data
const handleSubmit = async (event) => {
	event.preventDefault();

	

	newForm.forEach( async (item) =>{
		console.log(item);

		try {
		
			
			const { data } = await addWorkout({
			  variables: {
				workout:{
				workoutTitle: item.workoutTitle,
				workoutAuthor: Auth.getProfile().data.username,
				exercises:[{title: item.title, reps: item.reps, sets: item.sets, weight: item.weight, other: item.other}]
				}
				
			  },
			});
	  
			setNewForm('');
		  }catch (err) {
			console.error(err);
		  };
		
		})
	

	

	

};








	
	
	const handleWorkoutTitle = (e, index) => {
		const form = [...newForm]; // get all forms from state
		form[index]['workoutTitle'] = e.target.value; // assign the value of the sets input to key of the specified form at index
		setNewForm(form); // set form array with new sets value
	};

	// const handleWorkoutAuthor = (e, index) => {
	// 	const form = [...newForm]; // get all forms from state
	// 	form[index]['workoutAuthor'] = e.target.value; // assign the value of the sets input to key of the specified form at index
	// 	setNewForm(form); // set form array with new sets value
	// };




	const handleTitle = (e, index) => {
		const form = [...newForm]; // get all forms from state
		form[index]['title'] = e.target.value; // assign the value of the sets input to key of the specified form at index
		setNewForm(form); // set form array with new sets value
	};


	// handle inputs for sets
	const handleSets = (e, index) => {
		const form = [...newForm]; // get all forms from state
		form[index]['sets'] = e.target.value; // assign the value of the sets input to key of the specified form at index
		setNewForm(form); // set form array with new sets value
	};

	// handle inputs for reps
	const handleReps = (e, index) => {
		const form = [...newForm];
		form[index]['reps'] = e.target.value; // assign the value of the reps input to key of the specified form at index
		setNewForm(form); // set form array with new reps value
	};

	// handle inputs for weights
	const handleWeight = (e, index) => {
		const form = [...newForm];
		form[index]['weight'] = e.target.value; // assign the value of the weights input to key of the specified form at index
		setNewForm(form); // set form array with new weights value
	};

	// removes a form of exercises
	const handleRemove = (index) => {
		const form = [...newForm];
		form.splice(index, 1); // delete form at index, 1 time
		setNewForm(form); // set new form array to account for deletion
	};

	// adds a new form for new exercises
	const handleAdd = () => {

		setNewForm([...newForm, {workoutTitle:'', workoutAuthor: ''},{ title: '', sets: '', reps: '', weight: '', other: '' }]); // set a new form to form state array
		console.log(setNewForm)
	};
	
	

	return (
		<>

			<h1>Welcome Back, Michael!</h1>
			<p>Enter your exercises for today:</p>
			<div className='formContainment'>

			
		
			



		
				{newForm.map((input, index) => {
					return (
					
						
						<div className="box" key={index}>
							<p>Exercise {index + 1}</p>
							<form>
							<button onClick={handleSubmit}>Submit</button>

							<label>workout title</label>
								<input
									type="text"
									key="workoutTitle"
									value={input.workoutTitle}
									onChange={(e) => handleWorkoutTitle(e, index)}
								/>
							
								{/* <label>workoutAuthor</label>
								<input
									type="text"
									key="workoutAuthor"
									value={input.workoutAuthor}
									onChange={(e) => handleWorkoutAuthor(e, index)}
								/> */}

							
								<label>title</label>
								<input
									type="text"
									key="title"
									value={input.title}
									onChange={(e) => handleTitle(e, index)}
								/>

								<label>Sets</label>
								<input
									type="text"
									key="sets"
									value={input.sets}
									onChange={(e) => handleSets(e, index)}
								/>
								<label>Reps</label>
								<input
									type="text"
									key="reps"
									value={input.reps}
									onChange={(e) => handleReps(e, index)}
								/>
								<label>Weight</label>
								<input
									type="text"
									key="weight"
									value={input.weight}
									onChange={(e) => handleWeight(e, index)}
								/>
							





							</form>

							{error && (
              				<div className="col-12 my-3 bg-danger text-white p-3">
               				 {error.message}
							 {console.log('error was at bottom')}
             				 </div>
           						 )}


							<div className='btnContainer'>
								{newForm.length !== 1 && (
									<button onClick={() => handleRemove(index)}>Remove</button>
								)}
								{newForm.length - 1 === index && (
									<button onClick={handleAdd}>Add</button>
								)}
							</div>
						</div>
					);
				})}
			
			</div>
		</>
	);
};

export default Form;
