// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
"use strict";
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];
function fetchall(urls) {
  Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
    .then(console.log)
    .catch(console.error);
}
fetchall(urls);
