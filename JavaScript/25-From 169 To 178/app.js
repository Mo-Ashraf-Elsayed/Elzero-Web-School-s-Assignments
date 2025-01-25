// ------------------------------------------------ No Challenge---------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

// ------------ The soultion is a json file in "json" folder

//-----------------------------2

let obj = new XMLHttpRequest();
obj.open("GET", "./articles.json");
obj.send();
obj.onreadystatechange = function () {
  // this request is work in live server
  if (this.readyState === 4 && this.status === 200) {
    // Soultion Task 2
    console.log("JSON Object Content Here");
    console.log("Data Loaded");
    // Needed Output
    // "JSON Object Content Here"
    // "Data Loaded"

    // Soultion Task 3 && 4
    let mainData = JSON.parse(this.responseText);
    let idDiv = document.createElement("div"); // Task 4
    idDiv.id = "data"; // Task 4
    document.body.appendChild(idDiv); // Task 4
    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div"); // Task 4
      idDiv.appendChild(div); // Task 4
      let h2 = document.createElement("h2"); // Task 4
      let texth2 = document.createTextNode(mainData[i].title); // Task 4
      h2.appendChild(texth2); // Task 4
      div.appendChild(h2); // Task 4
      let p1 = document.createElement("p"); // Task 4
      let textp1 = document.createTextNode(mainData[i].body); // Task 4
      p1.append(textp1); // Task 4
      div.append(p1); // Task 4
      let p2 = document.createElement("p"); // Task 4
      let textp2 = document.createTextNode(`Author : ${mainData[i].author}`); // Task 4
      p2.append(textp2); // Task 4
      div.append(p2); // Task 4
      let p3 = document.createElement("p"); // Task 4
      let textp3 = document.createTextNode(
        `Category : ${mainData[i].category}`
      ); // Task 4
      p3.append(textp3); // Task 4
      div.append(p3); // Task 4
      mainData[i].category = "All"; // Task 3
    }
    console.log(mainData); // Task 3
    let updatedData = JSON.stringify(mainData); // Task 3
    console.log(updatedData); // Task 3
  }
};
