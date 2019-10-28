const request = require("request");

request("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  res,
  body
) {
  if (err) {
    console.log(err.message);
  }
  console.log(body);
});

request("https://jsonplaceholder.typicode.com/posts/2", function(
  err,
  res,
  body
) {
  if (err) {
    console.log(err.message);
  }
  console.log(body);
});

request("https://jsonplaceholder.typicode.com/posts/3", function(
  err,
  res,
  body
) {
  if (err) {
    console.log(err.message);
  }
  console.log(body);
});
