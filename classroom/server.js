const express = require("express");
const app = express();
const port = 3000;
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.get("/getcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("madeIn", "India");
    res.send("Hello, I am a cookie!");
});

app.get("/greet", (req, res) => {
    let { name = "anonymous"} = req.cookies;
    res.send(`Hello, ${name}!`);
});



app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, welcome to Wonderlust!");
});

app.use(users);
app.use(posts);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});