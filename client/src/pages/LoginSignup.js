import React from 'react';
import backgroundVideo from '../images/vertheader.mp4';
import SignUp from '../components/SignUp'

// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// LOGIN JS
//------------------------

// const Login = (props) => {
//     const [formState, setFormState] = useState({ email:'', password:''});
//     const [login, {error, data}] = useMutation( LOGIN_USER);

//     //update state based on from input changes

//     const handleChange = (event) => {
//         const {name, value } = event.target;
//         serFormState({
//             ...formState,
//         [name]: value,
//         });
//     };

// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState)
//     try {
//         const {data} = await login({
//             variable: {...formState},
//         });
//         Auth.login(data.login.token);
//     } catch (e) {
//         console.error(e);
//     }
//     // clear form values
//     setFormState({
//         email: '',
//         password: '',
//       });
// };
 

//FAKE FORM FOR UI - can restructure when ready. LMK
function LoginSignUp(){
return (
//react form goes here
<main className="pagesContainer"> 


<section className="mainFormContainer">

<form className="loginForm" >
<h2> Login </h2>
    <label> Email: 
    <input className="form-input" placeholder="Email" name="email" type="email" value="" onChange=""/>
    </label>
    <label> Password: 
    <input className="form-input" placeholder="*******" name="email" type="email" value="" onChange=""/>
    </label>
    <button style={{ cursor: 'pointer' }} type="submit"> Login </button>
</form>

<video className="videoHeader" autoPlay muted loop> <source src={backgroundVideo} type="video/mp4"/> </video>
<SignUp/>
</section>
</main>
) //end of return  
}

// } //end of login function

//exports home page
export default LoginSignUp;