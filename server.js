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

app.get("/results", () => {});

// sync sequelize models to db
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
