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
        workoutAuthor: String
        title: String
        sets: Int
        reps: Int
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


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addWorkout(title: String!,workoutAuthor: String!, exercise: String!, reps: Int!, sets: Int!, weight: Int!, other: String): Workout
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