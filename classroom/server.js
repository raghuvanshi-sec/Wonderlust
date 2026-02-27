const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(
    session(sessionOptions)
);

app.use(flash());


app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    res.send(name);
});

app.get("/", (req, res) => {
    res.send("Hi, I am root,,");
});

app.get("/reqcount", (req, res) => {
    if (req.session.count){
        req.session.count++;
    }else {
        req.session.count =1;
    }
})