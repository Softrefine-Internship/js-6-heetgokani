// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
"use strict";
function fetchtimeout(url, timeout) {
  let timer;
  const promise = new Promise((resolve, reject) => {
    timer = setTimeout(() => reject("timeout"), timeout);
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
  promise
    .then((data) => {
      clearTimeout(timer);
      console.log(data);
    })
    .catch((err) => {
      clearTimeout(timer);
      console.log(err === "timeout" ? "request timed out" : err);
    });
}
fetchtimeout("https://jsonplaceholder.typicode.com/todos/1", 3000);
