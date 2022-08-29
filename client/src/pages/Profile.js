import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';

//assets
import Mikey from '../images/michaelangelo.png';
import Saved from '../images/love.png';
import AddIcon from '../images/pencil.png';
import Pin from '../images/cheese.png';
import AllWorkoutsIcons from '../images/dumbbell.png'


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

<div className="introProfileCard"> 
<div className="helloUsername"> 
    <img src={Mikey} alt="logo" width="45px"/>  
      <h2> Hi \ Username! / </h2>
      {/* once query works turn this on */}
            {/* <h2> Viewing {userParam ? `${user.username}` : user.username} profile </h2> */}
    </div> 
    
<div className="splinterQuote"> <h3>“The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal.” <span> - Master Splinter  </span></h3> 
     </div>

     </div>

<section className="homepageContentDivs featuredContainer">
  <div className="profileNavContainer">
        <Link className="profileNav" to="/profile"> <img src={AllWorkoutsIcons} alt="weights" width="36px"/>  workouts </Link>
        <Link className="profileNav" to="/profile/myworkouts"> <img src={Saved} alt="heart" width="30px"/>  your workouts </Link>
        <Link to="/workout" className="profileNav"> <img src={AddIcon} alt="heart" width="30px"/>  add a workout </Link>
            <h5 className="comingSoon profileNav"> <img src={Pin} alt="pin" width="30px"/> saved (coming soon) </h5>
        </div>

{/* ------ */}

  <div> 
  <Outlet />
  </div>
</section>
</main>
) //end of return  
}

//exports profile page
export default Profile;



//code back up

{/* <div className="featuredWorkoutCard-profile"> 
 
<div className="featured-left"> 
  <div className="featuredH2"> 
  <img src={Mikey} alt="logo" width="45px"/>  
    <h2> Hi \ Username! / </h2>

  </div> 
</div>
<div className="featured-right featuredRight-profile">
      <Link className="profileNav" to="/myworkouts"> <img src={Saved} alt="heart" width="30px"/>  your workouts </Link>
      <Link to="/workout" className="profileNav"> <img src={AddIcon} alt="heart" width="30px"/>  add a workout </Link>
          <h5 className="comingSoon profileNav"> <img src={Pin} alt="pin" width="30px"/> saved (coming soon) </h5>
      </div>
</div> */}
