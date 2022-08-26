import { gql } from '@apollo/client';

export const QUERY_USER = gql`
<<<<<<< HEAD
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      workouts {
        title: String
        workoutAuthor: String
        exercises
      }
=======

    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            workouts {
                _id
                title
                exercises {
                    _id
                    title
                    sets
                    reps
                    weight

                    other
                }

            }
        }
>>>>>>> 1eaa3c35182a729d6c13993a12232eda51750092
    }
  }
`;

<<<<<<< HEAD
// export const QUERY_WORKOUTS = gql`
//   query getWorkouts {
//     workouts {
    // _id: 
    // title: String
    // workoutAuthor: String
    // exercises: [Exercise]!
//     }
//   }
// `;
=======
export const QUERY_WORKOUTS = gql`
    query getWorkouts {
        workouts {
            _id
            workoutAuthor
            title
            exercises {
                _id
                title
                sets
                reps
                weight

                other
            }
        }
    }
>>>>>>> 1eaa3c35182a729d6c13993a12232eda51750092

// export const QUERY_SINGLE_WORKOUT = gql`
//   query getSingleWorkout($workoutId: ID!) {
//     workout(workoutId: $workoutId) {
    // _id:
    // title 
    // workoutAuthor
    // exercises {

<<<<<<< HEAD
        // title
        // sets
        // reps
        // weight
        // other
//       }
//     }
//   }
// `;
=======
export const QUERY_SINGLE_WORKOUT = gql`
    query getSingleWorkout($workoutID: ID!) {
        workout(workoutId: $workoutId) {
            _id
            workoutAuthor
            title
            exercises {
                _id
                title
                sets
                reps
                weight

                other
            }

        }
    }
>>>>>>> 1eaa3c35182a729d6c13993a12232eda51750092

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       workouts {
//          _id
        // title
        // workoutAuthor
        // exercises
//       }
//     }
//   }
// `
;