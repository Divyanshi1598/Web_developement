// window : is a global object .it is created browser.it is top level entity

// Dom:--- html ke code ko js object me convert krta h use kahte h document

// Bom:--- agar js communicate karna chahti h browser ke sath kisi aise matter par jo content nahi h use hm BOM kahte h

// asynchronous

setTimeout(function () {
  console.log("hello world");
}, 1000);

console.log("hello jiii");
function sync() {
  console.log("object");
}
sync();

// API:
// Interface:
//  features of Asyn code:----1.Clean and concise
// 2.better and  error handling
// 3. Reusability

//  Promise

let request = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("i m inside promise ");
  }, 3000);
  resolve("data divyanshi ...");
  // reject(new Error ("error data"))
});
console.log("pehla jjj");

// next example

let wada1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("print data 1..");
  }, 2000);
  resolve(true);
});

let output = wada1.then(() => {
  let wada2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("print data 2..");
    }, 3000);
    resolve("wada 2 resolved..");
  });
  return wada2;
});

output.then((value) => console.log(value));

// async function using  promise

async function utility() {
  let delhiMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delhi me bahot garmi h");
    }, 3000);
  });

  let hydMausam = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hyd me bahot garmi h");
    }, 5000);
  });

  let dm = await delhiMausam;
  let hm = await hydMausam;
  return [dm, hm];
}

// api call fetch
let obj = {
  heading: "head",
};

// get api call
async function apicall() {
  let content = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await content.json();
  console.log(data, "api data");
}
apicall();

// post call api
async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      
      title: "miss",
      body: "barddd",
      userId: 12,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  let saveData = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let response = saveData.json();
  return response;
}

async function responsePost() {
  let answer = await helper();
  console.log(answer,"kkkk");
}
responsePost();


// closures

