import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth.js';


const Signup = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    //error state for color change of inputs
    const [isError, setErrorState] = useState(false);

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);

//setting error state for color change of inputs

           setErrorState(true)
            console.log(setErrorState)
      }
    };
  
    return (
           <section className="mainFormContainer">
             
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form className="signupForm" onSubmit={handleFormSubmit}>
                <h2> Sign Up </h2>
                <label> Username:
                  <input
                    className={isError ? 'error-input' : 'form-input'}
                    placeholder="username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />  </label>
                  <label> Email: 
                  <input
                    className={isError ? 'error-input' : 'form-input'}
                    placeholder="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  /> </label>
                  <label> Password: 
                  <input
                    className={isError ? 'error-input' : 'form-input'}
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  /> </label>
                  <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>

                  {error && (
                <div className="errorFormMess">
                  {error.message}
                </div>
              )}

                </form>
              )}
  

      </section>
    );
  };
  
  export default Signup;