// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
"use strict";
function fetchdata(url, attempts) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => {
      if (attempts > 0) {
        fetchData(url, attempts - 1);
      } else {
        console.error("Failed after multiple attempts");
      }
    });
}
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetchdata(apiUrl, 3);
