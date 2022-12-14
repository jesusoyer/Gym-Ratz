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
import PageNotFound from "./pages/404Page";
import Home from './pages/Home';
import LoginSignUp from './pages/Login';
import Profile from './pages/Profile';
import AddWorkout from "./pages/AddWorkout";

//Components Imported
import Header from './components/Header';
import Footer from './components/Footer';
import WorkoutList from "./components/LiveFeed";
import MyWorkouts from "./components/MyWorkouts";

import WorkoutForm from "./pages/AddWorkout";
import OurMission from "./components/OurMission";


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
const cache = new InMemoryCache();
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
    <Route path="/" element={<Home/>}> 
      <Route path="#mission" element={<OurMission/>}/>
    </Route>
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginSignUp/>}/>
    <Route path="/workout" element={<AddWorkout/>}/>
    <Route path="/profile" element={<Profile/>}>
      <Route path="" element={<MyWorkouts/>}/>
      <Route path="livefeed" element={<WorkoutList/>}/>
      <Route path="workout" element={<WorkoutForm/>}/>
    </Route>
    <Route path="/me" element={<Profile />} />
    <Route path="/profile/:username"element={<Profile />}/>
    <Route path="/404" element={<PageNotFound/>} />
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  
  {/* footer is static  */}
  <Footer/>
  </Router>
  </ApolloProvider>
  );
}

export default App;
