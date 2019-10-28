const request = require("request-promise-native");

function getPost(id) {
  return new Promise((resolve, reject) => {
    request(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

const promises = [1, 2, 3, 4].map(n => getPost(n));

Promise.all(promises)
  .then(posts => console.log(posts))
  .catch(err => console.log(err));
