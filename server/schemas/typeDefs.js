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

    type Query {
        users: [User]
        user:(userId: ID!): User
        workouts: [Workout]
        workout(workoutId: ID!): Workout
    }
`