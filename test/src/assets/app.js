const feedDisplay = document.querySelector("#feed");

// create a promise to link to backend
fetch("http://localhost:8001")
  // chain the response from json
  .then((response) => response.json())
  .then((data) => console.log(data));
