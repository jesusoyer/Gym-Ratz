import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';




//assets
import Mikey from '../images/michaelangelo.png';
import Saved from '../images/love.png';
import AddIcon from '../images/pencil.png';
import Pin from '../images/cheese.png';
import AllWorkoutsIcons from '../images/dumbbell.png'


//404 
import forOfor from '../images/error-404.png'


const Profile = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  // console.log("data", data)

  const finalData = data ? data : {}
  // console.log("Final Data", finalData)
  const user = finalData.me || finalData.user || {};

  

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user.username) {
    return (
      
      <div className="featuredWorkoutCard-profile"> 
      
      <div className="featured-left"> 
        <div className="featuredH2"> 
        <img src={forOfor} alt="logo" width="100px"/>  
          {/* <h2> 404 Oops! </h2> */}

        </div> 
      </div>
      <div className="featured-right featuredRight-profile">
            <Link className="profileNav" to="/myworkouts"> <img src={Saved} alt="heart" width="30px"/>  your workouts </Link>
            <Link to="/workout" className="profileNav"> <img src={AddIcon} alt="heart" width="30px"/>  add a workout </Link>
           
            
                <h5 className="comingSoon profileNav"> <img src={Pin} alt="pin" width="30px"/> saved (coming soon) </h5>
            </div>
      </div>

    );
    
  }

  return (
    <main>

      <div className="introProfileCard">
        <div className="helloUsername">
          <img src={Mikey} alt="logo" width="45px" />
          <h2> Welcome Back, {userParam ? `${user.username}` : user.username}! </h2>
          {/* once query works turn this on */}
        </div>

        <div className="splinterQuote"> <h3>"The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal." <span> - Master Splinter  </span></h3>

        

        </div>

      </div>

      <section className="homepageContentDivs featuredContainer">
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


