const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/playground";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) //connect method return promise
  .then((result) => console.log("connected to mongo db"))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});
const Author = mongoose.model("author", authorSchema);

const courseSchema = new mongoose.Schema({
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
});
const Course = mongoose.model("Course", courseSchema);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find().populate("author").select("name author");
  console.log(courses);
}

// createAuthor("Mosh", "My bio", "My Website");

// createCourse("Node Course", "63c502606a1b3b688f6c68e3");

listCourses();
