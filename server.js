const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 8002;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// app.set("view", path.join(__dirname, "public"));
// app.set("view engine", "pug");
// app.set(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

app.use(require("./contollers"));

// sync sequelize models to db
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
