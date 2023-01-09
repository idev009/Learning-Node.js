console.log("before");
//resolving callback hell with the named functions reference method / technique
getUser(1, displayUser);

console.log("After");

function displayUser(user) {
  console.log("user", user);
  githubRepoUsername(user.name, displayRepo);
}

function displayRepo(repo) {
  console.log("repo", repo);
  githubCommit(repo, displayCommit);
}

function displayCommit(commit) {
  console.log("commit", commit);
}

function getUser(userId, callback) {
  setTimeout(
    () => {
      console.log("reading user from database");
      callback({ id: userId, name: "ishan" });
    },

    2000
  );
}

function githubRepoUsername(user, callback) {
  setTimeout(() => {
    console.log("Calling Github API to fetch user repo");
    callback(["repo1", "repo2", "repo3"]);
  }, 3000);
}
function githubCommit(username, callback) {
  setTimeout(() => {
    console.log("Getting Commit");
    callback(["commit1", "commit2"]);
  }, 3000);
}
