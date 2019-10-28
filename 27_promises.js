const request = require("request-promise-native");

request("https://jsonplaceholder.typicode.com/posts/1")
  .then(val => console.log(val))
  .catch(err => console.log(err.message));
