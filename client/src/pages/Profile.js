import React from 'react';
import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';

import WorkoutList from '../components/WorkoutList';

//assets
import Splinter from '../images/splinter.png';
import Mikey from '../images/michaelangelo.png';
import Saved from '../images/love.png';
import AddIcon from '../images/pencil.png';
import Pin from '../images/cheese.png';


const Profile = () => {

{/* once query works turn this on */}
    // const {username: userParam} = useParams();

    // const {loading, data} = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    //     variables: {username: userParam},
    // });

    // console.log("QUERY_ME", QUERY_ME)
    // console.log("QUERY_USER", QUERY_USER)
    // console.log("userParam", userParam)

    // const user = data?.me || data?.user || {};

    // console.log("Data Test ?.me", data?.me)
    // console.log("Data Test", user)

    // navigate to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //   return <Navigate to="/me" />;
    // }

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    // if (!user?.username) {
    //   return (
    //     <h4>
    //       You need to be logged in to see this. Use the navigation links above to
    //       sign up or log in!
    //     </h4>
    //   );
    // }

return (
    <main> 

  
<div className="splinterQuote"> <h2>“The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal.” - Master Splinter <img src={Splinter} alt="logo" width="55px"/>  </h2>
     </div>

<section className="homepageContentDivs featuredContainer">

  <div className="featuredWorkoutCard-profile"> 
 
  <div className="featured-left"> 
    <div className="featuredH2"> 
    <img src={Mikey} alt="logo" width="45px"/>  
      <h2> Hi \ Username! / </h2>
      {/* once query works turn this on */}
            {/* <h2> Viewing {userParam ? `${user.username}` : user.username} profile </h2> */}
    </div> 
  </div>
  <div className="featured-right featuredRight-profile">
        <Link className="profileNav" to="/myworkouts"> <img src={Saved} alt="heart" width="30px"/>  your workouts </Link>
        <Link to="/workout" className="profileNav"> <img src={AddIcon} alt="heart" width="30px"/>  add a workout </Link>
            <h5 className="comingSoon profileNav"> <img src={Pin} alt="pin" width="30px"/> saved (coming soon) </h5>
        </div>
  </div>

{/* ------ */}

  <div> 
      <h3> Recent Workouts:</h3>
  <WorkoutList />
  </div>
</section>
</main>
) //end of return  
}

//exports profile page
export default Profile;


