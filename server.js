const express = require("express");
const path = require("path");
const app = express();
const helmet = require("helmet");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(helmet());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
})