import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
   mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password:$password) {

        
            token
            user {
                _id
                username
            }
        }
   }
`;







export const ADD_WORKOUT = gql`
  mutation addWorkout($workoutTitle: String!, $workoutAuthor: String!, $exerciseType: String!, $sets: String!, $reps: String!, $weight: String!, $description: String!) {
    addWorkout(workoutTitle: $workoutTitle, workoutAuthor: $workoutAuthor, exerciseType: $exerciseType, sets: $sets, reps: $reps, weight: $weight, description: $description) {
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
`;

// export const REMOVE_WORKOUT = gql`
// mutation removeWorkout($workoutId: String!){removeWorkout(workoutId: $workoutId)}
//   workoutId
// `



