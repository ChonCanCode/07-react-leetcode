// 4. Async Function That Returns a Value After Delay

//    Write an async function delayedValue(value, ms) which returns the passed value after waiting for ms milliseconds.

//    Use wait(ms) from question 3 inside your async function.

//    Return the value after the delay.

//    Test by logging the result.

// 1. What should happen? (features / behaviors)
// Async function return a value after delay it used to fetching dat from API.

// 2. What do I need to remember? (state / variables)
// It needs to eb able to capture the value

// 3. How does it change over time? (loops, timers, events)
// Doesn't need change simply return one value

// 4. How do I organize it? (functions, objects, modules)
// single async function > await

async function delayValue(value, ms) {
  return await setTimeout((value) => {
    value;
  }, ms);
}

delayValue("Result", 1000);

//first answer
// helper wait function (from Q3)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// main async function
async function delayedValue(value, ms) {
  await wait(ms); // wait for ms ms
  return value; // then return the value
}

// test
delayedValue("Result", 1000).then(console.log);

//second answer
async function delayedValue(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

delayedValue("Result", 1000).then(console.log);
