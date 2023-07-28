const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

let listTaskToday = [];
let listTaskWork = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {newListTask: listTaskToday});
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {newListTask: listTaskWork});
})

app.post("/", (req, res) => {
    let newTask = req.body.newTaskToday;
    listTaskToday.push(newTask);
    res.render("index.ejs", {newListTask: listTaskToday });
});

app.post("/work", (req, res) => {
    let newTask = req.body.newTaskWork;
    listTaskWork.push(newTask);
    res.render("work.ejs", {newListTask: listTaskWork });
});

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})