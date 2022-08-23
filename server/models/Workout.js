const { Schema, model } = require('mongoose')

// const exerciseSchema = require('./Exercise')

const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        execise: {
            type: String,
            required: true,
        },
        sets: {
            type: Number,
            required: true,

        },
        reps: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        other: {
            type: String
        } 
    }
);

const Workout = model('Workout', workoutSchema)

module.exports = Workout;