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

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}
async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}
// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Ishan" }),
//   new Author({ name: "Emy" }),
// ]);

// addAuthor("63c594f9d4610855b32f8e32", new Author({ name: "John" }));
removeAuthor("63c594f9d4610855b32f8e32", "63c5961bbd8b8df34308c70f");
