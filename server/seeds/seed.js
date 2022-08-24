const db = require('../config/connection');
const { User, Workout } = require('../models');
const userSeeds = require('./userSeeds.json');
const workoutSeeds = require('./workoutsSeeds.json');

db.once('open', async () => {
  try {
    await Workout.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < workoutSeeds.length; i++) {
      const { _id, workoutAuthor } = await Workout.create(workoutSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: workoutAuthor },
        {
          $addToSet: {
            workouts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});