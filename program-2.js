// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
function fetchdata(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
fetchdata("https://jsonplaceholder.typicode.com/posts").then((data) => {
  console.log(data);
});
