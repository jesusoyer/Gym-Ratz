const { gql } = require('apollo-server-express');

console.log("you are in typedefs")

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        workouts: [Workout]!    
    }

    type Workout {
        _id: ID
        title: String
        workoutAuthor: String
        exercises: [Exercise]!
    }
       
    type Exercise {
        title: String!
        sets: Int
        reps: Int!
        weight: Int
        other: String
      }

    type Auth {
        token: ID!
        user: User
      }

      type Query {
        users: [User]
        user(username: String!): User
        workouts(username: String): [Workout]
        workout(workoutId: ID!): Workout
        me: User 
    }

    input ExerciseInput {
        title: String!
        sets: Int
        reps: Int!
        weight: Int
        other: String
      }

    input WorkoutInput {
        title: String
        workoutAuthor: String
        exercises: [ExerciseInput]  
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

<<<<<<< HEAD
        addWorkout(title: String!, workoutAuthor: String! ): Workout
=======
        addWorkout(workout: WorkoutInput!): Workout
>>>>>>> 9f26e212274dd170a6b78225005558f4341fb737

        removeWorkout(workoutId: ID!): Workout


    }
`;

module.exports = typeDefs;

// addWorkout(title: String!, exercises: [Exercise]!)
// addExercise(workoutId: ID!, title: String!, sets: Number!, reps: Number!): Workout

// workouts: [Workout]
// workout(workoutId: ID!): Workout

//    type Workout {
//         title: String
//         sets: Number
//         reps: Number
//         weight: Number
//         other: String

//         // exercises: [Exercise]!
//     }

    // type Exercise {
    //     _id: ID
    //     title: String
    //     sets: Number
    //     reps: Number
    // }