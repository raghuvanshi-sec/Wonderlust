const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(
    session(sessionOptions)
);


app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.username = name;
    res.send(`welcome ${name}`);
});

app.get("/", (req, res) => {
    res.send(`welcome ${req.session.username}`);
});

// app.get("/test", (req, res) => {
//     req.session.count = req.session.count + 1;
//     res.send(`You visited this page ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//     res.send("test session");
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});