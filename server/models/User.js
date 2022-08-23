const { Schema } = require('mongoose')

const workoutSchema = require('./Workout')

// model for user
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:  [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true,
        },

        // user can save workouts; import workout schema; set to an array of workout data
        saveWorkouts: [workoutSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

// need to hash the password with bcrypt?

const User = model('User', userSchema);

module.exports = User;

