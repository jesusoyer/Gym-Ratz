import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
function Profile(){
return (
//profile content goes here
<h1> Profile goes here </h1>

//workout list query needed

) //end of return  
}

//exports profile page
export default Profile;


