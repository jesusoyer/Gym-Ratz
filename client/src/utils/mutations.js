import { gql } from '@apollo/client';

export const LOGIN_USER = gql`

   mutation login($email: String!, $password: String!) {
        login(email: $email, paswword: $password) {
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
        addUser(username: $username, email: $email, password:$password!) {
            token
            user {
                _id
                username
            }
        }
   }
`;

export const ADD_WORKOUT = gql`
   mutation addWorkout($workoutAuthor: String!, $title: String!) {
        addWorkout(workoutAuthor: $workoutAuthor, title: $title){
            _id
            workoutAuthor
            title
            exercises {
                -id
                title
            }
            other
        }
   }

`;

export const ADD_EXERCISE = gql`
   mutation addExercise($workoutId: ID!, $title: String!) {
        addExercise(workoutId: $workoutId, title: $title) {
            _id
            workAuthor
            title
            exercises {
                title
                sets
                reps
                weight
            }
            other
        }
   }

`;


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
