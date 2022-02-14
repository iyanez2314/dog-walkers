const express = require("express");
const sequelize = require("./config/connection");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require("./contollers"));

app.get("/", function (req, res) {
  res.json("dog Walkers");
});

app.get("/", function (req, res) {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname, "index.html");
});

// sync sequelize models to db
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
