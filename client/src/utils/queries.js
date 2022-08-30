import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
//     query user($username: String!) {
//         user(username: $username) {
//             _id
//             username
//             email
//             workouts {
//                 _id
//                 workoutTitle
//                 exercises {
//                     _id
//                     title
//                     sets
//                     reps
//                     weight

//                     other
//                 }

//             }
//         }
//     }
// `;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      workouts {
        _id
        workoutTitle
        workoutAuthor
        exerciseType
        sets
        reps
        weight
        description
      }
    }
  }
`;





export const QUERY_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      workoutAuthor
      workoutTitle
      exerciseType
      sets
      reps
      weight
      description
    }
  }
`;







// export const QUERY_WORKOUTS = gql`
//     query getWorkouts {
//         workouts {
//             _id
//             workoutAuthor
//             workoutTitle
//             exercises {
//                 _id
//                 title
//                 sets
//                 reps
//                 weight

//                 other
//             }
//         }
//     }`;





// export const QUERY_SINGLE_WORKOUT = gql`
//     query getSingleWorkout($workoutId: ID!) {
//         workout(workoutId: $workoutId) {
//             _id
//             workoutAuthor
//             workoutTitle
//             exercises {
//                 _id
//                 title
//                 sets
//                 reps
//                 weight

//                 other
//             }

//         }
//     }`;

 export const QUERY_ME = gql`
   query me {
     me {
       _id
       username
       email
       workouts {
        _id
        workoutTitle
        workoutAuthor
        exerciseType
        sets
        reps
        weight
        description

        

       }
     }
   }
 `
;

  


