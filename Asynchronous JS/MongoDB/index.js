const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const uri = "mongodb://127.0.0.1:27017/playground";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) //connect method return promise
  .then((result) => console.log("connected to mongo db"))
  .catch((err) => console.log(err));
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "React course",
    author: "Akshay Saini",
    tags: ["react", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function fetchRecord() {
  const result = await Course.find().limit(10).sort({ name: 1 });
  // .select({ name: 1, tags: 1 });
  console.log(result);
}

// find record and filtering records
fetchRecord();

// save record
// createCourse();

// mongodb://localhost:27017

// Comparision Operators gt,lt,lte,gte, in , nin
// Logical Operators and, or
// Regular Expression :- String
