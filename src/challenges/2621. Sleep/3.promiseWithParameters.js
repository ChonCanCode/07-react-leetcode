
// 3. Promise with Parameters

//    Create a function wait(ms) that returns a Promise which resolves after ms milliseconds.

//    The function should take one argument ms.

//    It should resolve after ms time using setTimeout.

//    Test with different values of ms.

//My attempt
function Timer(){
    const stop = promoise(resolve) {
        setTimeout{() => resolve ()}
    }
    return (stop)
};


// Inline function VS Named function 
// 📎 Inline = less mental overhead for short operations.
// 🧩 Named = more structure, easier to manage when code grows.

//Correction
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // You can optionally resolve with a value
    }, ms);
  });
};

// This is clean and concise
// Best for simple one-time logic
// ✅ Preferred by most developers in this specific case
// ✅ Easier to read when the logic is short

//Question:
//"Why does wait(ms) return a new Promise(...) directly instead of having another inner function to handle the logic?"

//We can use this, however, startTimer function cannot be called outside of wait function.
function wait(ms) {
  function startTimer(resolve) {
    setTimeout(() => {
      resolve();
    }, ms);
  }

  return new Promise(startTimer)
//Adds clarity if startTimer is long or used more than once
//Makes stack traces clearer when debugging
//More verbose — not always necessary for simple logic
//❌ Overkill if the logic is just one setTimeout

//think about a start & stop time.