import React, { useState } from 'react';
import '../styles/Workout.css';

// const tempAuthor = "test#3"

// const exerciseFormValues = [{ title: '', sets: '', reps: '', weight: '', other: '' }]
// const workoutFormValues = [{workoutTitle: '', workoutAuthor: tempAuthor}]

const Form = () => {
	// array of forms containing set, reps, and weights
	const [newForm, setNewForm] = useState( [{title: '', sets: '', reps: '', weight: '', other: ''}] );
	const [newTitle, setNewTitle] = useState('')

	const handleWorkoutTitle = (e) => {
		const { target } = e;
		// const inputType = target.name; // get all forms from state
		const inputValue = target.value;
		// title[index]= e.target.value; // assign the value of the sets input to key of the specified form at index
		if (target.name = 'workoutTitle'){
			setNewTitle(inputValue);
		}
		 // set form array with new sets value
	};
	
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

	const handleOther = (e, index) => {
		const form = [...newForm];
		form[index]['other'] = e.target.value; // assign the value of the weights input to key of the specified form at index
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
		setNewForm([...newForm, {title: '', sets: '', reps: '', weight: '', other: ''}]); // set a new form to form state array
	};

	// log data to console or hgowever we are returning the data
	const handleSubmit = () => {
		console.log(newTitle);
		newForm.forEach((item) => {
			console.log(item);
		});
	};

	return (
		<>

			<h1>Welcome Back, Michael!</h1>
			<p>Enter your exercises for today:</p>
			<div className='formContainment'>
			<label>Title</label>
				<input
					type="text"
					name="workoutTitle"
					placeholder="Enter title"
					onChange={handleWorkoutTitle}
					value={newTitle}
					required
								/>
				{newForm.map((input, index) => {
					return (
						
						<div className="box" key={index}>
							<p>Exercise {index + 1}</p>
							<form>
							<label>Title</label>
								<input
									type="text"
									name="title"
									placeholder="Enter title"
									value={input.title}
									onChange={(e) => handleTitle(e, index)}
									required
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
								<label>Other</label>
								<input
									type="text"
									name="other"
									placeholder="Enter other info"
									value={input.other}
									onChange={(e) => handleOther(e, index)}
									required
								/>
							</form>
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
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</>
	);
};

export default Form;
