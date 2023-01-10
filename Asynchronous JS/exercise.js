async function goldCustomer() {
  const customer = await getCustomer(1);
  console.log(customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log(movies);
    const email = await sendEmail(customer.email, movies);
    console.log(email);
  }
}
goldCustomer();
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("email sent to the customer");
    }, 4000);
  });
}
