import { gql } from '@apollo/client';

export const QUERY_USER = gql`
<<<<<<< HEAD



=======
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
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
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
<<<<<<< HEAD

=======
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
    }

`;

<<<<<<< HEAD

=======
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
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
<<<<<<< HEAD


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
=======
  }
`;
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
