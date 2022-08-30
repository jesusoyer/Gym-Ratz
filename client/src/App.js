import React from "react"; 
import './App.css';
import "./index.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages Imported 
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignup';
import Profile from './pages/Profile';
import AddWorkout from "./pages/AddWorkout";

//Components Imported
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutList from "./components/WorkoutList";
import MyWorkouts from "./components/MyWorkouts";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return ( 

// ApolloProvider client goes here 
<ApolloProvider client={client}>
  <Router>
  {/* header/nav is static */}
  <Header/>

  {/* dynamic pages */}
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginSignUp/>}/>
    {/* seperated the register link but going to the same path/page as login. 2 forms one page */}
    <Route path="/register" element={<LoginSignUp/>}/>
    <Route path="/workout" element={<AddWorkout/>}/>
    <Route path="/profile" element={<Profile/>}>
      <Route path="" element={<WorkoutList/>}/>
      <Route path="myworkouts" element={<MyWorkouts/>}/>
    </Route>
    <Route path="/me" element={<Profile />} />
    <Route path="/profile/:username"element={<Profile />}/>
  </Routes>
  
  {/* footer is static  */}
  <Footer/>
  </Router>
  </ApolloProvider>
  );
}

export default App;
