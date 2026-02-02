const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/projects", (req, res) => {
    res.render("under-construction");
});

app.get("/about", (req, res) => {
    res.render("under-construction");
});

app.get("/contact", (req, res) => {
    res.render("under-construction");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
})