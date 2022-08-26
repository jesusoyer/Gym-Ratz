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

export const ADD_WORKOUT = gql`
  mutation addWorkout($workout: WorkoutInput){
    addWorkout(workout: $workout){
      title
      workoutAuthor
      exercises {
        title
        sets
        reps
        weight
        other
      }
    }
  }
`;