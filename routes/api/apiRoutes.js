const router = require("express").Router();
const Workouts = require("../../models/workouts.js")
const path = require("path");

router.get("/api/workouts", (req, res) => {
  Workouts.findOne({})
    .sort({day: -1}) //Day or date?
    .then(Workouts => {
      res.json(Workouts);
    })
    .catch(err => {
      res.status("api/workouts GET route not working").json(err)
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workouts.findById(req.params.id)
    .then(Workouts => {
      res.json(Workouts);
    })

    .catch(err => {
      res.status("api/workouts/:id PUT route not working").json(err)
  });
});

// router.post("/api/workouts", (req, res) => {
//    Workouts.insertMany()
//      .then((Workouts) => {
//        res.json(Workouts);
//      })

//      .catch((err) => {
//        res.status("api/workouts POST route not working").json(err);
//      });
// });

router.get("/api/workouts/range", (req, res) => { //Where is 'range' coming from?

  // Workouts.find({})
//    .sort({ })
//     .then(Workouts => {
//       res.json(Workouts);
//     })
//     .catch(err => {
//       res.status("api/workouts/range GET route not working").json(err)
//     });
});

module.exports = router;
