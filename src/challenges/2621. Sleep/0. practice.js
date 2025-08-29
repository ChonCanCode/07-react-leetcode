//title: 2621. Sleep
//Tags:

//Get away:
// Think of it like calling a coworker to get info:

// You: “Hey, what’s Alice’s full name?”
// Coworker (a.k.a. formatName): “It’s Alice Smith.”
// You pass that answer directly to your boss without doing anything else.

// That’s returning a function call from another function.

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// Constraints:

//     1 <= millis <= 1000

//Roads to resolve the question above:

// 1. Basic Promise Creation

// Create a function that returns a Promise that resolves with the string "Hello" after 1 second.

// Write a function sayHello() that returns a Promise.

// Use setTimeout to resolve after 1000 milliseconds.

// Use .then() to log the resolved value.

// 2. Using Async/Await to Wait for a Promise

// Using the function from question 1, create an async function that awaits the sayHello function and logs the value.

// Understand how to write an async function.

// Use await to wait for the promise to resolve.

// Log the result after it resolves.

// 3. Promise with Parameters

// Create a function wait(ms) that returns a Promise which resolves after ms milliseconds.

// The function should take one argument ms.

// It should resolve after ms time using setTimeout.

// Test with different values of ms.

// 4. Async Function That Returns a Value After Delay

// Write an async function delayedValue(value, ms) which returns the passed value after waiting for ms milliseconds.

// Use wait(ms) from question 3 inside your async function.

// Return the value after the delay.

// Test by logging the result.

// 5. Measure Delay Time

// Write a function that measures how long an async function takes to resolve:

// Use Date.now() before calling an async function.

// Use await inside an async function.

// Use Date.now() again after the promise resolves.

// Calculate and log the elapsed time.

// 6. Combining It All: Implement sleep

// Using your understanding from previous questions, implement a function sleep(millis):

// It should be an async function.

// It should wait for millis milliseconds.

// It should resolve (return) the value millis.

// Tips for learning:

// Remember async functions always return a Promise.

// await only works inside async functions.

// setTimeout is a classic way to create delays but doesn't work natively with await, so you need to wrap it in a Promise.

// Practice chaining .then() and using async/await to get comfortable with both styles.

let startTime;
let elapsed = 0;
let running = false;
let timerId;

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsed;
    tick();
  }
}

function stop() {
  running = false;
  clearTimeout(timerId);
}

function reset() {
  stop();
  elapsed = 0;
  console.log("Reset: 0s");
}

function tick() {
  if (running) {
    elapsed = Date.now() - startTime;
    console.log(`Elapsed: ${(elapsed / 1000).toFixed(2)}s`);
    timerId = setTimeout(tick, 1000);
  }
}

start();
setTimeout(stop, 5000);
