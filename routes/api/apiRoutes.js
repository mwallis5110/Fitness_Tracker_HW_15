const router = require("express").Router();

const path = require("path");

router.get("/api/workouts", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/workout.js"));
});

router.put("/api/workouts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/workout.js"));
});

router.post("/api/workouts", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/workout.js"));
});

router.get("/api/workouts/range", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/workout.js"));
});

module.exports = router;
