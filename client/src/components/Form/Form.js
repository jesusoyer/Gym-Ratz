import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
	// array of forms containing set, reps, and weights
	const [newForm, setNewForm] = useState([
		{
			workoutAuthor: '',
			title: '',
			exercise: '',
			sets: '',
			reps: '',
			weight: '',
			other: '',
		},
	]);

	// per React controlled components documentation
	const handleInput = (e, index) => {
		const form = [...newForm]; // get all forms from state
		form[index][e.target.name] = e.target.value; // assign the value of the target name input to name of the specified form at index
		setNewForm(form); // set form array with new taget value
	};

	// removes a form of exercises
	const handleRemove = (index) => {
		const form = [...newForm];
		form.splice(index, 1); // delete form at index, 1 time
		setNewForm(form); // set new form array to account for deletion
	};

	// adds a new form for new exercises
	const handleAdd = () => {
		setNewForm([
			...newForm,
			{
				workoutAuthor: '',
				title: '',
				exercise: '',
				sets: '',
				reps: '',
				weight: '',
				other: '',
			},
		]); // set a new form to form state array
	};

	// log data to console or hgowever we are returning the data
	const handleSubmit = () => {
		newForm.forEach((item) => {
			console.log(item);
		});
	};

	return (
		<section className={styles.containment}>
			<h1>Welcome Back, Michael!</h1>
			<p className={styles.desc}>Enter your exercises for today:</p>
			<div>
				{newForm.map((input, index) => {
					return (
						<div className={`${styles.formContent}`} key={index}>
							<p>
								<strong>Exercise</strong>
							</p>

							<form>
								<label>Author</label>
								<input
									type="text"
									name="workoutAuthor"
									placeholder="Enter title"
									value={input.workoutAuthor}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Exercise</label>
								<input
									type="text"
									name="title"
									placeholder="Enter title"
									value={input.title}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Exercise</label>
								<input
									type="text"
									name="exercise"
									placeholder="Enter exercise name"
									value={input.name}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Sets</label>
								<input
									type="number"
									name="sets"
									placeholder="Enter number of sets"
									value={input.sets}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Reps</label>
								<input
									type="number"
									name="reps"
									placeholder="Enter number of reps"
									value={input.reps}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Weight</label>
								<input
									type="number"
									name="weight"
									placeholder="Enter number of weights"
									value={input.weight}
									onChange={(e) => handleInput(e, index)}
									required
								/>
								<label>Other</label>
								<input
									type="text"
									name="other"
									placeholder="Enter other info"
									value={input.other}
									onChange={(e) => handleInput(e, index)}
									required
								/>
							</form>
							<div className={styles.btnContainer}>
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
				<div className={styles.submitBtnContainer}>
					<button className={`${styles.submitBtn}`} onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</section>
	);
};

export default Form;
