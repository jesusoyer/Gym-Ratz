import { gql } from '@apollo/client';

export const QUERY_USER = gql`
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
    }
  }
`;

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

// export const QUERY_SINGLE_WORKOUT = gql`
//   query getSingleWorkout($workoutId: ID!) {
//     workout(workoutId: $workoutId) {
    // _id:
    // title 
    // workoutAuthor
    // exercises {

        // title
        // sets
        // reps
        // weight
        // other
//       }
//     }
//   }
// `;

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