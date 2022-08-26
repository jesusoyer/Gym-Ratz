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
<<<<<<< HEAD
        addUser(username: $username, email: $email, password:$password) {
=======
        addUser(username: $username, email: $email, password: $password) {
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
            token
            user {
                _id
                username
            }
        }
   }
`;


// export const ADD_WORKOUT = gql`
//    mutation addWorkout($workoutAuthor: String!, $title: String!) {
//         addWorkout(workoutAuthor: $workoutAuthor, title: $title){
//             _id
//             workoutAuthor
//             title
//             exercises {
//                 _id
//                 title
//             }
//             other
//         }
//    }

// `;

// export const ADD_EXERCISE = gql`
//    mutation addExercise($workoutId: ID!, $title: String!) {
//         addExercise(workoutId: $workoutId, title: $title) {
//             _id
//             workAuthor
//             title
//             exercises {
//                 title
//                 sets
//                 reps
//                 weight
//             }
//             other
//         }
//    }

// `;




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
<<<<<<< HEAD

`;

=======
`;
>>>>>>> 95484188cdbc27886f9f8000660279cc9ce3b197
