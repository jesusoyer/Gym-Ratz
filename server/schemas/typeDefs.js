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
`
module.exports = typeDefs;