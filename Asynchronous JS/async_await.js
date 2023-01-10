console.log("Before");

// Promise Chaining
// getUser(1)
//   .then((user) => getRepositories(user.gitHubUsername))
//   .then((repo) => getCommits(repo))
//   .then((commit) => console.log(commit))
//   .catch((err) => {
//     console.log("error", err.message);
//   });
async function getUserCommits() {
  try {
    const user = await getUser(1);
    const repo = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repo);
    console.log("commits => ", commit);
  } catch (err) {
    console.log("Error", err.message);
  }
}
getUserCommits();
function getUser(id) {
  return new Promise((resolve, reject) => {
    //kick off async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    // kick of some async work

    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
      console.log("Calling GitHub API...");
      //reject(new Error('commits not found'));
      resolve(["commit"]);
    }, 2000);
  });
}
console.log("After");
