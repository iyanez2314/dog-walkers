const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const tailwindcss = require("./tailwind.config");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 8001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./contollers"));

// sync sequelize models to db
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
