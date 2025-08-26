// 2. Using Async/Await to Wait for a Promise

// Using the function from question 1, create an async function that awaits the sayHello function and logs the value.

// Understand how to write an async function.

// Use await to wait for the promise to resolve.

// Log the result after it resolves.


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