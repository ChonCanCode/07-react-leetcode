// 2. Using Async/Await to Wait for a Promise

// Using the function from question 1, create an async function that awaits the sayHello function and logs the value.

// Understand how to write an async function.

// Use await to wait for the promise to resolve.

// Log the result after it resolves.

//My attempt
function fetching Async(){
    const fectch = convert.json()
    return await(fetch)

}

fetching()



function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello!");
        }, 1000);
    });
}

async function fetching() {
    const result = await sayHello();  // Wait for the promise to resolve
    console.log(result);              // Log the resolved value
}

fetching(); // Call the async function

//Correct me if I am wrong. The sayHello fucntion is a standard promise(resolve,reject) wait to be triggered, the fectching is a async function which enable await so it will wait for the sayHello function to be completed before loging the result. But in what situration I will use this combo?