// 6. Combining It All: Implement sleep

//    Using your understanding from previous questions, implement a function sleep(millis):

//    It should be an async function.

//    It should wait for millis milliseconds.

//    It should resolve (return) the value millis.

//    Tips for learning:

//    Remember async functions always return a Promise.

//    await only works inside async functions.

//    setTimeout is a classic way to create delays but doesn't work natively with await, so you need to wrap it in a Promise.

//    Practice chaining .then() and using async/await to get comfortable with both styles.

// async function sleep(millis) {
//   let answer = "success";
//   return await new Promise((resolve) =>
//     setTimeout(() => resolve(answer), millis)
//   );
// }

// console.log(sleep(1000));

// //correction:

// sleep(1000).then(console.log);

//Lesson learned console.log wont wait it will print out promise which will defeat the purpose of function.

//.then() examples:
// const promise1 = new Promise((resolve, reject) => {
//   resolve("Success!");
//   reject("Failure");
// });

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: "Success!"
// });

// fuynct;
// let startTimer;
// let stopTimer;
// let elapsed;

// async function sleep(millis) {
//   let answer = "Hello World!";
//   startTimer = Date.now();
//   await new Promise((resolve) => setTimeout(() => resolve(answer), millis));
//   stopTimer = Date.now();
//   elapsed = stopTimer - startTimer;
//   let secondsElapsed = Math.trunc(elapsed / 1000);
//   console.log(answer, "Took:", secondsElapsed, "seconds");
// }

// sleep(5000);

// Professional rewrite:

// async function sleepPro(millis) {
//   const start = Date.now();

//   await new Promise((resolve) => setTimeout(resolve, millis));

//   const elapsed = Date.now() - start;
//   const seconds = Math.round(elapsed / 1000);

//   console.log(`Pro:Hello World! Took: ${seconds} seconds`);
// }

// sleepPro(5000);

const sleep = (ms) =>
  new Promise((resolve) => {
    const start = Date.now();
    setTimeout(() => {
      const elapsed = (Date.now() - start) / 1000;
      resolve(`Sleep function took ${elapsed.toFixed(1)} seconds to complete`);
    }, ms);
  });

sleep(500).then(console.log);

const sleepProStyle = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo(ms) {
  const start = Date.now();
  await sleepProStyle(ms);
  const elapsed = (Date.now() - start) / 1000;
  return `Sleep function took ${elapsed.toFixed(1)} seconds to complete`;
}

demo(500).then(console.log);
