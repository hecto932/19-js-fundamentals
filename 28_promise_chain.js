const request = require("request-promise-native");

request("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log(response);
    return request("https://jsonplaceholder.typicode.com/posts/2");
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => console.log(err.message));
