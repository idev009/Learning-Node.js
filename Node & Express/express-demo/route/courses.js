const express = require("express");
const router = express.Router();
const { validate } = require("joi");

// Note :- we have removed or say shorten the url which contain /api/courses, because in index.js we have define that anyone passing request to /api/courses will be executed by thsi module so when someone pases request then things will work according to this module.

//------------------------  REST API ---------------------------------
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

router.get("/:id", (req, res) => {
  const course = courses.find(function (c) {
    return c.id === parseInt(req.params.id, 10);
  });

  if (!course) {
    //404
    res.status(404).send("The course with the given id is not found");
  } else {
    res.send(course);
  }
});

router.get("/all", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  // look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  // if not exists return 404
  if (!course) {
    //404
    res.status(404).send("The course with the given id is not found");
    return;
  }

  //Validate the input
  // if invalid input return 400 - bad request
  // using custom validate function to validation of the form
  const result = validateCourse(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Update the course
  course.name = req.body.name;

  // Check if the course has been updated
  if (course.name === req.body.name) {
    res.send(course);
  } else {
    res.status(500).send("An error occurred while updating the course.");
  }
});

router.delete("/:id", (req, res) => {
  const course = courses.find(function (c) {
    return c.id === parseInt(req.params.id, 10);
  });

  if (!course) {
    return res
      .status(404)
      .send("The course with the given id is not been found.");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

//
// seperate function for the validate the course

function validateCourse(courseObj) {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
  });

  const result = schema.validate(courseObj);
  return result;
}

module.exports = router;
