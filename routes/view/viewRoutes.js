const router = require("express").Router();
const path = require("path");
// const apiRoutes = require("../api/apiRoutes");
// router.use("/api", apiRoutes)

const Workouts = require("../../models/workouts.js");
// const viewRoutes = require("../view/viewRoutes.js");
// router.use("/view", viewRoutes)
// const path = require("path");

router.get("/api/workouts", (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercise.duration",
        },
      },
    },
  ])
    .sort({ date: -1 })
    .then((workoutsdb) => {
      console.log(workoutsdb)
      res.json(workoutsdb);
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
      $push: { exercise: req.body },
    },
    { new: true }
  )
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })

    .catch((err) => {
      res.json(err);
      console.log("api/workouts/:id PUT route not working");
    });
});

router.post("/api/workouts", (req, res) => {
  Workouts.create(req.body)
    .then((workoutsdb) => {
      res.json(workoutsdb);
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
          $sum: "$exercise.duration",
        },
      },
    },
  ])
    .sort({ date: -1 })
    .limit(7)
    .then((workoutsdb) => {
      res.json(workoutsdb);
    })
    .catch((err) => {
      res.json(err);
      console.log("api/workouts/range GET route not working");
    });
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});



module.exports = router;

