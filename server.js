const express = require("express");
//TODO: Configure sessions.
//const session = require("express-session");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("images"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Route to display static images
app.get("/static", (req, res) => {
    res.render("static");
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Listening on PORT # http://localhost:3001");
    });
});