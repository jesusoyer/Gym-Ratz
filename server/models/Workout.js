const { Schema, model } = require('mongoose')

// const exerciseSchema = require('./Exercise')

const workoutSchema = new Schema(
    {
        workoutAuthor:{
            type: String,
            required: true,
            trim: true,
        },
        workoutTitle: {
            type: String,
            required: true,
            trim:true
            
        },
            exerciseType: {
            type: String,
            required: true,
            trim: true,
        },
            sets: {
            type: String,
            required: true,
            trim: true,
        },
            reps: {
            type: String,
            required: true,
            trim: true,
        },
            weight: {
            type: String,
            required: true,
            trim: true,
        }, 
            description: {
            type: String,
            required: true,
            trim: true,
        }
        }
    
);

const Workout = model('Workout', workoutSchema)

module.exports = Workout;