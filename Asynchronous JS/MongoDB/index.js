const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const uri = "mongodb://127.0.0.1:27017/playground";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) //connect method return promise
  .then((result) => console.log("connected to mongo db"))
  .catch((err) => console.log(err));
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

async function fetchRecord() {
  const result = await Course.find()
    //find({ author: /.*mosh.*/i }) // string patterns which contains mosh in any part of the string
    //(string ending with saini)find({ author: /saini$/i }) //(string starting with akshay)find({ author: /^akshay/i })
    .limit(10)
    .sort({ name: 1 });
  // .select({ name: 1, tags: 1 });
  console.log(result);
}

// find record and filtering records
// fetchRecord();

// save record
createCourse();

// mongodb://localhost:27017

// Comparision Operators gt,lt,lte,gte, in , nin
// Logical Operators and, or
// Regular Expression :- String

// Updating the Document

// async function updateDocument(id) {
// const result = await Course.updateOne(
//   { _id: id },
//   {
//     $set: {
//       isPublished: true,
//       author: "Brad Trasnversy",
//     },
//   }
// );
// console.log(result);

//  3rd Approach
//   const course = await Course.findByIdAndUpdate(
//     id,
//     {
//       $set: {
//         isPublished: false,
//         author: "Jack Ma",
//       },
//     },
//     { new: true }
//   );

//   console.log(course);
//   // 1st Approach
//   // const course = await Course.findById(id);
//   // if (!course) return;
//   // course.isPublished = true;
//   // course.author = "An Author";
//   // const result = await course.save();
// }

// updateDocument("63be594bae9e3c5c054c9a4e");

// async function removeDocument(id) {
//   const result = await Course.findByIdAndDelete(id);
//   console.log(result);
// }

// removeDocument("63be594bae9e3c5c054c9a4e");
