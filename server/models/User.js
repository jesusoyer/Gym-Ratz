const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');


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
            minlength: 8,
            maxLength: 32,
        },
        workouts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Workout',
            },
        ],

        // user can save workouts; import workout schema; set to an array of workout data
        // saveWorkouts: [workoutSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

// need to hash the password with bcrypt?
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);

module.exports = User;

