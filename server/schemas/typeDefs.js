const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email: String
        password: String
        workouts: [Workout]!
    }

    type Workout {
        title: String
        exercises: [Exercise]!
    }

    type Exercise {
        title: String
        sets: Number
        reps: Number
    }
<<<<<<< HEAD
`
module.exports = typeDefs;
=======

    type Query {
        users: [User]
        user:(userId: ID!): User
        workouts: [Workout]
        workout(workoutId: ID!): Workout
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addWorkout(title: String!, exercises: [Exercise]!)
        addExercise(workoutId: ID!, title: String!, sets: Number!, reps: Number!): Workout
    }
`
>>>>>>> 247c0103737113503ac5d691393762c97dff4bde
