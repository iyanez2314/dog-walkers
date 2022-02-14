const feedDisplay = document.querySelector("#feed");

async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch("http://localhost:8001");
  const contollers = await response.json();

  console.log("./contollers");
}

loadIntoTable("./seeds", document.querySelector("table"));

// create a promise to link to backend
fetch("http://localhost:8001")
  // chain the response from json
  .then((response) => response.json())
  .then((data) => console.log(data));
