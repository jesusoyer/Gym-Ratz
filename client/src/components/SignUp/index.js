import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//     const [formState, setFormState] = useState({
//         username: '',
//         email: '',
//         password: '',
//       });

// cont [addUser, {user, data}] = userMutation(ADD_USER);

// const handleChage = (event) => {
//     const {name, value} = event.target;

//     serFormState({
//         ...formState,
//         [name] : value,
//     });
// };

// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//         const {data} = await addUser ({
//             variables: {...formState},
//         });
//         Auth.login(data.addUser.token);
//     } catch (e) {
//         console.error(e)
//     }
// };



// FAKE FORM SETUP FOR UI: needs restructuring
function registerForm(){
return (
//react form goes here

<form className="registerForm">
<h2> Register </h2>
    <label> Username: 
    <input className="form-input" placeholder="username" name="username" type="text"  value="" onChange=""/>
    </label>
    <label> Email: 
    <input className="form-input" placeholder="Email" name="email" type="email" value="" onChange=""/>
    </label>
    <label> Password: 
    <input className="form-input" placeholder="*******" name="email" type="email" value="" onChange=""/>
    </label>
    <button style={{ cursor: 'pointer' }} type="submit"> Login </button>
</form>

)  
} //end of return fake function UI purposes 

//} :not active - end of Signup function (auth)

//exports home page
export default registerForm;