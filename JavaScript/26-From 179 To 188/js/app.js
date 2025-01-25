// ------------------------------------------------ No Challenge---------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

// Function For Displaying data To tasks
function displayData(arr, ele) {
  let cartoona = "";
  for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <h3>${arr[i].title}</h3>
      <p>${arr[i].description}</p>
    `;
  }
  ele.innerHTML += cartoona;
}

//-----------------------------1
let conatinerForPromiseData = document.getElementById("conatinerForPromise");

function getDataWithPromise() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "../json/data.json");
    req.responseType = "json";
    req.send();
    req.addEventListener("load", () => {
      resolve(req.response);
    });
    req.addEventListener("error", () => {
      reject("error");
    });
  });
}
async function consumeTaskOnePromise() {
  getDataWithPromise().then(function (res) {
    let data = res;
    // data.length = 5;
    data.splice(5);
    displayData(data, conatinerForPromiseData);
  });
}

//-----------------------------2

let conatinerForFetchData = document.getElementById("conatinerForFetch");

async function getAndDisplayDataWithFetch() {
  let allData = await fetch("../json/data.json");
  let dataToJson = await allData.json();
  console.log(dataToJson);
  dataToJson.splice(5);
  displayData(dataToJson, conatinerForFetchData);
}

//------------------------------------------------
// Calling Functions

(async function () {
  await consumeTaskOnePromise();
  await getAndDisplayDataWithFetch();
})();
