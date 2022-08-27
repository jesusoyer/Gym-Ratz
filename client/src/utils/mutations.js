import { gql } from '@apollo/client';

console.log('You are in mutations')
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

   mutation addWorkout($workout: WorkoutInput) {
        addWorkout(workout: $workout){

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


`;



