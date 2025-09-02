// 5. Measure Delay Time

//    Write a function that measures how long an async function takes to resolve:

//    Use Date.now() before calling an async function.

//    Use await inside an async function.

//    Use Date.now() again after the promise resolves.

//    Calculate and log the elapsed time.

// my attempt, stuck on fitting the Date.now() after the fucntion is finisihed. Then work on calculating hte the ime by.

let isSwitchON = false;
let stopWatch;

async function fun01() {
  isSwitchON = true;
  stopWatch = Date.now(fetching);
  let fetching = new Promise((resolve) => {
    resolve("Cool!");
  });
  return await fetching;
}

function fun02() {
  stopWatch = Date.now(test01);
  const stop = Date.now(test01);
}
