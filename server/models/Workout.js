const { Schema } = require('mongoose')

const exerciseSchema = require('./Exercise')

const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        exercise: [
            {
            type: exerciseSchema,
            ref: 'Exercise',
            required: true
            },
        ],
    }
);

const Workout = model('Workout', workoutSchema)

module.exports = Workout;