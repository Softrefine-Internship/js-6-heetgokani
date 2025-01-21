// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
"use strict";
function delay(cb) {
  setTimeout(cb, 2000);
}
delay(() => {
  console.log("callback invoked after 2 seconds!");
});
