import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

//error assets
import errorVid from '../images/error.mp4';

//if regular 404 pg
import homeIcon from '../images/landing-page.png'
import loginIcon from '../images/join.png'
import confusedIcon from '../images/confused.png';
import madRat from '../images/rat.png'

//loggin in 
import ProfileIcon from '../images/michaelangelo.png';
import AddWorkoutIcon from '../images/dumbbell.png'
import errIcon from '../images/404-error.png'

const pageNotFound  = () => {

    return (
        <main>
        <div className="profile404Container"> 
        <div className="oops50Left"> 
          <div className="oops50innerBox"> 
          {Auth.loggedIn() ? (
            <>
            <h2> Not the 404 lol </h2>
            </>
          ): ( <> <h2> IMPOSTER! you're not a gym rat.....yet </h2> </>)}
          </div> 
          <video className="errorVideo" autoPlay muted loop> <source src={errorVid} type="video/mp4"/> </video>
        </div>
        <div className="oops50Right">

        {Auth.loggedIn() ? (
            <>
            <img src={errIcon} alt="logo" width="70px"/>  
            </>
          ):( 
            <>
            <img src={confusedIcon} alt="logo" width="70px"/>
            </>
          )}

              <h3> Get it togetherrrrrr </h3>
              <hr></hr>
       
          {Auth.loggedIn() ? (
              <>
              <Link to="workout" className="profileNav"> <img src={AddWorkoutIcon} alt="heart" width="50px"/>  add a workout </Link>
              <Link to="profile" className="profileNav"> <img src={ProfileIcon} alt="heart" width="50px"/> go back to profile </Link>
              <Link className="profileNav" to="/"> <img src={homeIcon} alt="heart" width="50px"/>  back to home  </Link>


          
           </>
          ) : ( 
          <>
              <Link className="profileNav" to="login"> <img src={homeIcon} alt="heart" width="50px"/>  home  </Link>
              <Link to="/" className="profileNav"> <img src={loginIcon} alt="heart" width="50px"/>  login + sign up </Link>
              <h5 className="profileNav"> <img src={madRat} alt="pin" width="50px"/> u better sign up </h5> 
          </>
          )}
    
        </div>
        </div>
         </main>
    
      );

}

export default pageNotFound;








