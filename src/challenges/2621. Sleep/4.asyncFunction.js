// 4. Async Function That Returns a Value After Delay

//    Write an async function delayedValue(value, ms) which returns the passed value after waiting for ms milliseconds.

//    Use wait(ms) from question 3 inside your async function.

//    Return the value after the delay.

//    Test by logging the result.

//my approach 01
// async function delayValue(value, ms) {
//   return await new Promise((resolve) => {
//     setTimeout((value) => {
//       resolve(value);
//     }, ms);
//   });
// }

// console.log(delayValue("testing", 1000));

//My approach 2
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function delayedValue(value){
//   await return value + wait()
// }

//Laughg die me loging
// function wait(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedValue(value, ms) {
//   await wait(ms);
//   return value;
// }

// console.log("Hello World", 1000);

//Correct approch
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedValue(value, ms) {
  await wait(ms);
  return console.log(value);
}

delayedValue("Hello World", 1000);
