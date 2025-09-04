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

async function sleep(millis) {
  let testing = "testing";
  await new Promise((resolve) => setTimeout(() => resolve(testing), millis));
  console.log(testing);
  return testing;
}

sleep(1000);

//.then() examples:
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
  reject("Failure");
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});
