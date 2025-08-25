function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

sayHello().then((message) => {
  console.log(message);
});

//Correct me if I am wrong, function has been called. but i dont konw that .then does it simplay logging the message place holder as outcome. is new a form of a built-in function what is Promise do? inside I under resolve is a place holder  setTimeout i dont know how it works either maybe a callback function where resolve will be capture the string hello when 1000ms passed? os the syntax of setTimeout is setTimeout(()=>{},1000) so whever the time is up it will trigger the function within in but why it is () and not (resolve) => {resolve("Hello")}

//1. new Promise(...) creates a new Promise object which represents a task that will complete in the future. either successfull(resolve) or failure(reject)
const promise = new Promise((resolve, reject) => {
  // Do something async, then call resolve() or reject()
});
