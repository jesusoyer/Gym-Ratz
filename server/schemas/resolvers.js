



const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

console.log("you are in resolvers")

const resolvers = {
    
    Query: {
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //       return User.findOne({ _id: context.user._id }).populate('workouts');
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        //   },
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('workouts');
        },

          users: async () => {
            return User.find().populate('workouts');
          },
      },


Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      console.log(context.user)
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

      console.log(context.user)

      return { token, user };
    },




addWorkout: async (parent, { title, exercise, reps, sets, weight,other}, context) => {
    if (context.user) {
      console.log(context.user)
      const workout = await Workout.create({
        title,
        exercise,
        reps,
        sets,
        weight,
        other,
      });

<<<<<<< HEAD
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { workouts: workout._id } }
      );
=======
      console.log(context.user);

      // await User.findOneAndUpdate(
      //   // { _id: context.user._id },
      //   { $addToSet: { workouts: workout._id } }
      // );
>>>>>>> 24b9940d6e9fec609ae5b91ba2d301441553830b

      return workout;
    // }
    // throw new AuthenticationError('You need to be logged in!');
      }
},
}
};




module.exports = resolvers;