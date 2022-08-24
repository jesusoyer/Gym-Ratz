



const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

console.log("you are in resolvers")

const resolvers = {
    
    Query: {
       
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('workouts');
        },

          users: async () => {
            return User.find().populate('workouts');
          },
          workouts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Workout.find(params).sort({ createdAt: -1 });
          },
          workouts: async (parent, { workoutId }) => {
            return Workout.findOne({ _id: workoutId });
          },

          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('thoughts');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
      },


Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      

      return { token, user };
    },


    addWorkout: async (parent, { title, exercise, reps, sets, weight,other, workoutAuthor}) => {
      const workout = await Workout.create({ title, exercise, reps, sets, weight,other, workoutAuthor});

      await User.findOneAndUpdate(
        { username: workoutAuthor },
        { $addToSet: { workouts: workout._id } }
      );

      return workout;
    
      }
    ,

    removeWorkout: async (parent, { workoutId }) => {
      return Workout.findOneAndDelete({ _id: workoutId });
    },

},



};





module.exports = resolvers;