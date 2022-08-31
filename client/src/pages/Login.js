import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../images/vertheader.mp4';
import SignUp from './signUp'

//css 
import './pages-styles/forms.css'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { set } from 'mongoose';

const Login = (props) => {
        const [formState, setFormState] = useState({ email:'', password:''});
        const [login, {error, data}] = useMutation( LOGIN_USER);

        //error state for color change of inputs
        const [isError, setErrorState] = useState(false);
    
        //update state based on from input changes
    
        const handleChange = (event) => {
            const {name, value } = event.target;
            setFormState({
                ...formState,
            [name]: value,
            });
        };

    const  handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        try {
            const {data} = await login({
                variables: {...formState},
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);

    //setting error state for color change of inputs
            setErrorState(true)
            console.log(setErrorState)
        }
        // clear form values
        setFormState({
            email: '',
            password: '',
          });

    };



return (
//react form goes here
<main className="pagesContainer formsContainerFlex" > 
    <section className="mainFormContainer">
    {data ? (
            <p>
                Success! You may now head{' '}
                <Link to="/profile">To profile page!.</Link>
                </p>
                ) : (

    <form onSubmit= {handleFormSubmit} className="loginForm" >
    <h2> Login </h2>

        <label> Email: 
        <input className={isError ? 'error-input' : 'form-input'} placeholder="email" name="email" type="email" value={formState.email} onChange={handleChange}/>
        </label>
        <label> Password: 
        <input className={isError ? 'error-input' : 'form-input'} placeholder="*******" name="password" type="password" value={formState.password} onChange={handleChange}/> </label>

        <button style={{ cursor: 'pointer' }} type="submit"> Login </button>
        
        {error && (
        <div className="errorFormMess">
            {error.message}
        </div>
        )}
    </form>
    )}     
    </section>



    <video className="videoHeader" autoPlay muted loop> <source src={backgroundVideo} type="video/mp4"/> </video>
    <SignUp/>
</main>
) //end of return  
}

// } //end of login function

//exports home page
export default Login;