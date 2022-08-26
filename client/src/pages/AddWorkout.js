import React, { useState } from 'react';
import '../styles/Workout.css';

const Form = () => {
	// array of forms containing set, reps, and weights
	const [newForm, setNewForm] = useState([{ sets: '', reps: '', weight: '' }]);

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
		setNewForm([...newForm, { sets: '', reps: '', weight: '' }]); // set a new form to form state array
	};

	// log data to console or hgowever we are returning the data
	const handleSubmit = () => {
		newForm.forEach((item) => {
			console.log(item);
		});
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
