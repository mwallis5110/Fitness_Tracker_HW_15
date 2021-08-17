const router = require("express").Router();
const Workouts = require("../../models/workouts.js");
// const path = require("path");

router.get("/api/workouts", (req, res) => {
  Workouts.findOne({})
    .sort({ date: -1 })
    .then((Workouts) => {
      res.json(Workouts);
    })
    .catch((err) => {
      res.status().json(err);
      console.log("api/workouts GET route not working");
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workouts.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { excercises: req.body },
    },
    { new: true }
  )
    .then((Workouts) => {
      res.json(Workouts);
    })

    .catch((err) => {
      res.json(err);
      console.log("api/workouts/:id PUT route not working");
    });
});

router.post("/api/workouts", (req, res) => {
  Workouts.insertMany()
    .then((Workouts) => {
      res.json(Workouts);
    })

    .catch((err) => {
      res.json(err);
      console.log("api/workouts POST route not working");
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])

    .sort({ date: -1 })
    .limit(7)
    .then((Workouts) => {
      res.json(Workouts);
    })
    .catch((err) => {
      res.json(err);
      console.log("api/workouts/range GET route not working");
    });
});

module.exports = router;
