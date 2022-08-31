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
              return User.findOne({ _id: context.user._id }).populate('workouts');
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



    addWorkout: async (parent, {workoutAuthor, workoutTitle, exerciseType, sets, reps, weight, description}) => {
      const newWorkout = await Workout.create({workoutAuthor, workoutTitle, exerciseType, sets, reps, weight, description});
      console.log(workoutAuthor, workoutTitle, exerciseType, sets, reps, weight, description )
       await User.findOneAndUpdate(
       { username: workoutAuthor },
       { $addToSet: { workouts: newWorkout._id } }

      );

      return newWorkout;
      
    
      }
    ,

    // addExercise: async (parent, { exercises, workoutId}) => {

    //   return Workout.findOneAndUpdate(
    //     { _id: workoutId },
    //     { $addToSet: { exercises: { title, sets, reps, weight } } },
    //     {
    //       new: true
    //     }
    //   );
    //   },
    

    removeWorkout: async (parent, { workoutId }) => {
      return Workout.findOneAndDelete({ _id: workoutId });
    },

},



};





module.exports = resolvers;