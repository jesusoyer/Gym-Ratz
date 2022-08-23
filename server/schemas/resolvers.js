



const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

console.log("you are in resolvers")

const resolvers = {
    
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('workouts');
            }
            throw new AuthenticationError('You need to be logged in!');
          },

          users: async () => {
            return User.find().populate('workouts');
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




addWorkout: async (parent, { title, exercise, reps, sets, weight,other}, context) => {
    if (context.user) {
      const workout = await Workout.create({
        title: context.user.username,
        exercise,
        reps,
        sets,
        weight,
        other,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { workouts: workout._id } }
      );

      return workout;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},
};


module.exports = resolvers;