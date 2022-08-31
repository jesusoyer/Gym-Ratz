import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';


//css 
import './pages-styles/profile.css'

//importing 404 page
import PageNotFound from './404Page';


//assets
import Mikey from '../images/michaelangelo.png';
import Saved from '../images/love.png';
import AddIcon from '../images/pencil.png';
import Pin from '../images/cheese.png';
import AllWorkoutsIcons from '../images/dumbbell.png'


const Profile = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // console.log("data", data)

  const finalData = data ? data : {}
  // console.log("Final Data", finalData)
  const user = finalData.me || finalData.user || {};

  // console.log("User Data", user)

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user.username) {
    return <PageNotFound/>
  }

  return (
    <main>

      <div className="introProfileCard">
        <div className="helloUsername">
          <img src={Mikey} alt="logo" width="45px" />
          <h2 className="userNameData" > Welcome Back, <span> {userParam ? `${user.username}` : user.username}! </span> </h2>
          {/* once query works turn this on */}
        </div>

        <div className="splinterQuote"> <h3>"The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal." <span> - Master Splinter  </span></h3>

        

        </div>

      </div>

      <section className="profileContainer">
        <div className="profileNavContainer">
          <Link className="profileNav" to="/profile"> <img src={AllWorkoutsIcons} alt="weights" width="36px" />  workouts </Link>
          <Link className="profileNav" to="/profile/myworkouts"> <img src={Saved} alt="heart" width="30px" />  your workouts </Link>
          <Link to="/workout" className="profileNav"> <img src={AddIcon} alt="heart" width="30px" />  add a workout </Link>
          <h5 className="comingSoon profileNav"> <img src={Pin} alt="pin" width="30px" /> saved (coming soon) </h5>
        </div>

        {/* ------ */}

        <div>
          <Outlet context={user} />
        </div>
      </section>
    </main>
  ) //end of return  
}

//exports profile page
export default Profile;


