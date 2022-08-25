



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


<<<<<<< HEAD
    addWorkout: async (parent, { title, workoutAuthor}) => {
      const workout = await Workout.create({ title, workoutAuthor});

      await User.findOneAndUpdate(
        { username: workoutAuthor },
        { $addToSet: { workouts: workout._id } }
=======
    addWorkout: async (parent, {workout}) => {
      const newWorkout = await Workout.create(workout);
      console.log(workout)
       await User.findOneAndUpdate(
       { username: workout.workoutAuthor },
       { $addToSet: { workouts: newWorkout } }
>>>>>>> 9f26e212274dd170a6b78225005558f4341fb737
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