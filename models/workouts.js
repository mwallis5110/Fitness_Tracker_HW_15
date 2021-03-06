const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: new Date() },
  exercise: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
    }, ],
});

const Workouts = mongoose.model("Workout", WorkoutSchema);

module.exports = Workouts;
