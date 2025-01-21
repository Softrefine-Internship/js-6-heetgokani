// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
"use strict";
function repeat(func, interval) {
  function loop() {
    func();
    setTimeout(loop, interval);
  }
  loop();
}
function greet() {
  console.log("Hello!");
}
repeat(greet, 1000);
