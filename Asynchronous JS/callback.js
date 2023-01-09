console.log("before");
// callback hell -> because the structure is too messy and uncleaned
getUser(1, (user) => {
  console.log("user", user);
  githubRepoUsername(user.name, (repo) => {
    console.log("repo", repo);
  });
});

console.log("After");

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
