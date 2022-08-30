const { gql } = require('apollo-server-express');

console.log("you are in typedefs")

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        workouts: [Workout]   
    }

    type Workout {
        _id: ID
        workoutTitle: String
        workoutAuthor: String
        exerciseType: String
        sets: String
        reps: String
        weight: String
        description: String
    }
       
   

    type Auth {
        token: ID!
        user: User
      }

      type Query {
        users: [User]
        user(username: String!): User
        workouts(username: String!): [Workout]
        workout(workoutId: ID!): Workout
        me: User 
    }

   

  

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

    
        addWorkout(workoutTitle: String!, workoutAuthor: String!, exerciseType: String!, sets: String!, reps: String!, weight: String!, description: String!): Workout


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