import React from "react"; 
import logo from './images/rat.png';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Pages Imported 
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignup';
import Profile from './pages/Profile';
import AddWorkout from "./pages/AddWorkout";

//Components Imported
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return ( 

// ApolloProvider client goes here 

  <Router>
  {/* header/nav is static */}
  <Header/>
  <img src={logo} className="App-logo" alt="logo" />
  {/* dynamic pages */}
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginSignUp/>}/>
    {/* seperated the register link but going to the same path/page as login. 2 forms one page */}
    <Route path="/register" element={<LoginSignUp/>}/>
    <Route path="/workout" element={<AddWorkout/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  
  {/* footer is static  */}
  <Footer/>
  </Router>

  );
}

export default App;
