const request = require("request-promise-native");

function getPost(id) {
  return new Promise((resolve, reject) => {
    request(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

async function getAllPosts() {
  try {
    const promises = [1, 2, 3, 4].map(n => getPost(n));
    const result = await Promise.all(promises);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

getAllPosts();
