// 5. Measure Delay Time

//    Write a function that measures how long an async function takes to resolve:

//    Use Date.now() before calling an async function.

//    Use await inside an async function.

//    Use Date.now() again after the promise resolves.

//    Calculate and log the elapsed time.

// my attempt, 03/09/2025
// let isSwitchON = false;
// let stopWatch;
// let elapsed = 0;

// async function fun01(ms) {
//   isSwitchON = true;
//   stopWatchStart = Date.now(fetching);
//   stopWatchStop = Date.now(elapsed);
//   elapsed = stopWatchStop - stopWatchStart;
//   let fetching = new Promise((resolve) => {
//     setTimeout(resolve(stopWatchStop), ms);
//   });
//   return await console.log(elapsed);
// }

// fun01(1000);

//Correction, 03/09/2025, fetching issue? Data.now() unable to take any arguments, so I need to find a way to start Data.now and activate the function.
// let elapsed;
// let stopWatchStart;
// let stopWatchStop;

// async function fun01(ms) {
//   stopWatchStart = Date.now();
//   stopWatchStop = Date.now();
//   elapsed = stopWatchStop - stopWatchStart;

// await new Promise((resolve) => setTimeout(() => (resolve(stopWatchStop), ms)));
// await new Promise((resolve) => setTimeout(() => resolve(stopWatchStop), ms));

//   return console.log("Time passed:", elapsed);
// }

// fun01(10000);

//finaly answer:
let elapsed;
let stopWatchStart;
let stopWatchStop;

async function fun01(ms) {
  stopWatchStart = Date.now();
  await new Promise((resolve) => setTimeout(resolve, ms));
  stopWatchStop = Date.now();
  elapsed = stopWatchStop - stopWatchStart;
  return elapsed;
}

fun01(500).then(console.log);

//reflection
//1. As it is within the function it will carry out top down approach the first line will be actioned so the start and stop timer can be used this way.
//2. setTimeout(..) sytnax
//my code:   await new Promise((resolve) => setTimeout(() => (resolve(stopWatchStop), ms)));
//Correction: await new Promise((resolve) => setTimeout(() => resolve(stopWatchStop), ms));
//my code is wraping both resovle,ms argument two gather which ended up passing as one single argument where the latter resolve, ms are separated.
